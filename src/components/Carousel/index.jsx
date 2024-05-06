import PropTypes from "prop-types";
import React, { memo } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestWrapper } from "./style";

const Carousel = memo((props) => {
  const { imgList } = props;

  let settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // 每一次滑動幾張圖片
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <TestWrapper>
      <Slider {...settings}>
        {imgList.map((item, idx) => (
          <img
            key={idx}
            src={`/src/assets/image/jpg/${item}`}
            className="img"
          />
        ))}
      </Slider>
    </TestWrapper>
  );
});

Carousel.propTypes = {
  imgList: PropTypes.array,
};
export default Carousel;
