import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchRoomDataAction } from '@/store/modules/room'
import { getCommonData } from '@/store/selector/common'
import { setIsLoading } from '@/store/modules/common'

import { HomeWrapper } from './style'
import Container from '@mui/material/Container'
import Skeleton from '@mui/material/Skeleton'
import RoomItems from '@/components/RoomItems'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(getCommonData)
  const { rooms } = useSelector(
    (state) => ({
      rooms: state.room.rooms,
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(fetchRoomDataAction())
  }, [dispatch])

  useEffect(() => {
    if (rooms.length > 0) {
      dispatch(setIsLoading(false))
    }
  }, [dispatch, rooms])

  const navigate = useNavigate()
  const directToDetail = (roomId) => {
    navigate(`/detail/${roomId}`)
  }

  return (
    <HomeWrapper>
      <div className="carousel"></div>
      <Container maxWidth="md">
        <div className="title">房型選擇</div>
        <div className="desc">各種房型，任您挑選</div>
        {isLoading ? (
          <Skeleton variant="rounded" height={300} />
        ) : rooms.length > 0 ? (
          <ul>
            {rooms?.map((item) => {
              return <RoomItems key={item['_id']} directToPage={directToDetail} itemData={item} />
            })}
          </ul>
        ) : (
          <p>很抱歉，目前無可預訂的房型</p>
        )}
      </Container>
    </HomeWrapper>
  )
})

export default Home
