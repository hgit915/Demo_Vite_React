import React, { memo, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import CarouselModal from '@/components/CarouselModal'
import RoomInfo from '@/components/RoomInfo'
import { DetailWrapper, LeftWrapper, RightWrapper, IconButtons } from './style'

import 'dayjs/locale/zh-tw'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(isSameOrAfter) // use plugin
dayjs.extend(isSameOrBefore)

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { toCommas } from '@/utils/format'

import { fetchRoomInfoAction } from '@/store/modules/room'
import { useDispatch, useSelector } from 'react-redux'

const today = dayjs()
const Detail = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { roomId } = useParams()
  const { detail, isLogin } = useSelector((state) => ({
    detail: state.room.detail,
    isLogin: state.user.isLogin,
  }))
  const [roomData, setRoomData] = useState(null)

  useEffect(() => {
    dispatch(fetchRoomInfoAction(roomId))
  }, [dispatch, roomId])

  useEffect(() => {
    if (detail) {
      setRoomData(detail)
    }
  }, [detail])

  // 儲存為 dayjs 的對象
  const [data, setData] = useState({
    startDate: '',
    endDate: '',
    people: 1,
  })

  const [error, setError] = useState({
    startDate: '',
    endDate: '',
  })

  const handleDate = (fieldName, value) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value === null ? '' : new Date(value).toLocaleDateString(),
    }))
  }

  const handleCount = (fieldName) => {
    setData((prevData) => {
      const updatedPeople = fieldName === 'remove' ? prevData.people - 1 : prevData.people + 1
      return { ...prevData, people: Math.min(Math.max(updatedPeople, 1), roomData.maxPeople) }
    })
  }

  const handleSubmit = () => {
    // 登入中才可以預訂
    if (!isLogin) navigate('/login')
    // 清除舊的錯誤訊息
    setError({
      startDate: '',
      endDate: '',
    })
    // 檢查日期格式、空值
    let errMsg = ''
    let errFlag = false
    const filedName = ['startDate', 'endDate']
    filedName.forEach((field) => {
      if (data[field] === '' || data[field] === 'Invalid Date') {
        errMsg = '日期不得為空或格式有誤'
        setError((prevError) => ({
          ...prevError,
          [field]: errMsg,
        }))
        errFlag = true
      }
    })

    const { startDate, endDate } = data
    const startDateString = dayjs(startDate)
    const endDateString = dayjs(endDate)
    if (startDateString.isSameOrAfter(endDateString)) {
      errFlag = true
      setError((prevError) => ({
        ...prevError,
        endDate: '退房日不得早於或等於入住日',
      }))
    }
    if (errFlag) return
  }

  return (
    <DetailWrapper>
      <div className="top">
        {roomData ? <CarouselModal imgList={roomData.imageUrlList} /> : <Skeleton variant="rectangular" height={400} />}
      </div>

      {roomData ? (
        <div className="bottom">
          <LeftWrapper>
            <div className="name">{roomData.name}</div>
            <div className="desc">{roomData.description}</div>
            <RoomInfo
              info={{
                layoutInfo: roomData.layoutInfo,
                facilityInfo: roomData.facilityInfo,
                amenityInfo: roomData.amenityInfo,
              }}
              basicInfo={{ areaInfo: roomData.areaInfo, bedInfo: roomData.bedInfo, maxPeople: roomData.maxPeople }}
            />
          </LeftWrapper>
          <RightWrapper>
            <div className="subtitle">預定房型</div>
            <div className="name">{roomData.name}</div>
            <div className="desc">{roomData.description}</div>

            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-tw">
              <DatePicker
                sx={{ marginBottom: '18px' }}
                label="入住日"
                format="YYYY/MM/DD"
                minDate={today}
                maxDate={today.add(1, 'year')}
                slotProps={{
                  textField: {
                    helperText: error.startDate,
                    error: Boolean(error.startDate),
                  },
                }}
                onChange={(date) => handleDate('startDate', date)}
              />

              <DatePicker
                sx={{ marginBottom: '25px' }}
                label="退房日"
                format="YYYY/MM/DD"
                minDate={today}
                maxDate={today.add(1, 'year')}
                slotProps={{
                  textField: {
                    helperText: error.endDate,
                    error: Boolean(error.endDate),
                  },
                }}
                onChange={(date) => handleDate('endDate', date)}
              />
            </LocalizationProvider>

            <div className="peopleCount">
              <span>人數</span>
              <div className="countBox">
                <IconButtons size="small" color="primary" onClick={() => handleCount('remove')}>
                  <RemoveIcon />
                </IconButtons>
                <span className="num">{data.people}</span>
                <IconButtons size="small" color="primary" onClick={() => handleCount('add')}>
                  <AddIcon />
                </IconButtons>
              </div>
            </div>

            <div className="price">NT {toCommas(roomData.price, true)}</div>
            <Button size="large" variant="contained" fullWidth onClick={handleSubmit}>
              {isLogin ? '立即預訂' : '登入會員，立即預訂!'}
            </Button>
          </RightWrapper>
        </div>
      ) : (
        <Skeleton className="bottom" variant="rounded" height={300} />
      )}
    </DetailWrapper>
  )
})
export default Detail
