import PropTypes from "prop-types";
import React, { memo } from "react";

import { RoomItemsWrapper } from "./style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BasicInfo from "@/components/BasicInfo";
import Carousel from "@/components/Carousel";
import { toCommas } from "@/utils";

const RoomItems = memo((props) => {
  const { itemData } = props;
  return (
    <RoomItemsWrapper>
      <div className="cover">
        <Carousel key={itemData["_id"]} imgList={itemData.imageUrlList} />
      </div>

      <div className="info">
        <div className="title">{itemData.name}</div>
        <div className="subTitle">{itemData.description}</div>
        <BasicInfo
          area={itemData.areaInfo}
          bed={itemData.bedInfo}
          maxPeople={itemData.maxPeople}
        />
        <div className="linear"></div>
        <div className="price">
          NT {toCommas(itemData.price, true)}
          <ArrowForwardIcon fontSize="large" color="primary" />
        </div>
      </div>
    </RoomItemsWrapper>
  );
});

RoomItems.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItems;
