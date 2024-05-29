import react, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Skeleton from '@mui/material/Skeleton'
import { AccountWrapper, AccordionWrapper, AccordionDetailWrapper, AccordionSummaryWrapper } from './style'

import { getUserData } from '@/store/selector/user'
import { getCommonData } from '@/store/selector/common'
import { setIsLoading } from '@/store/modules/common'

import { formatDate } from '@/utils/format'
import { getCityCountry } from '@/utils/zipcodes'

const Account = () => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)
  const { userInfo } = useSelector(getUserData)
  const { isLoading } = useSelector(getCommonData)

  useEffect(() => {
    dispatch(setIsLoading(true))
    if (userInfo) {
      dispatch(setIsLoading(false))
    }
  }, [dispatch, userInfo])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      {isLoading && Object.keys(userInfo).length === 0 ? (
        <Skeleton variant="rounded" height={300} />
      ) : (
        <AccountWrapper>
          <AccordionWrapper expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummaryWrapper
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>基本資料</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetailWrapper>
              <Typography>姓名：{userInfo.name}</Typography>
              <Typography>手機號碼：{userInfo.phone}</Typography>
              <Typography>生日：{formatDate(userInfo.birthday)}</Typography>
              <Typography>
                地址：{getCityCountry(userInfo?.address?.zipcode)?.detail} {userInfo?.address?.detail}
              </Typography>
            </AccordionDetailWrapper>
          </AccordionWrapper>

          <AccordionWrapper expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummaryWrapper
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>帳號管理</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetailWrapper>
              <Typography>電子信箱：{userInfo.email}</Typography>
            </AccordionDetailWrapper>
          </AccordionWrapper>
        </AccountWrapper>
      )}
    </>
  )
}

export default Account
