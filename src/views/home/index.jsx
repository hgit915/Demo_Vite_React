import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import { Container } from "@mui/material";
import RoomItems from "@/components/RoomItems";

const Home = memo(() => {
  const dispatch = useDispatch();
  const { rooms } = useSelector(
    (state) => ({
      rooms: state.home.rooms,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <div className="carousel"></div>
      <Container maxWidth="md">
        <div className="title">房型選擇</div>
        <div className="desc">各種房型，任您挑選</div>
        <ul>
          {rooms?.map((item) => {
            return <RoomItems key={item["_id"]} itemData={item} />;
          })}
        </ul>
      </Container>
    </HomeWrapper>
  );
});

export default Home;
