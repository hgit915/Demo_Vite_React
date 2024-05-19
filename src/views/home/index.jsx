import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchRoomDataAction } from '@/store/modules/room'
import { HomeWrapper } from './style'
import { Container } from '@mui/material'
import RoomItems from '@/components/RoomItems'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { rooms } = useSelector(
    (state) => ({
      rooms: state.room.rooms,
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchRoomDataAction())
  }, [dispatch])

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
        <ul>
          {rooms?.map((item) => {
            return <RoomItems key={item['_id']} directToPage={directToDetail} itemData={item} />
          })}
        </ul>
      </Container>
    </HomeWrapper>
  )
})

export default Home
