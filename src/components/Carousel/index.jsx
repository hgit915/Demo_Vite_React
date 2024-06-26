import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Slider from 'react-slick'

import { IMG_URL } from '@/services/request/config'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselWrapper } from './style'

const Carousel = memo((props) => {
  const { imgList } = props

  let settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // 每一次滑動幾張圖片
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {imgList?.slice(0, 4).map((item, idx) => (
          <img key={idx} src={`${IMG_URL}/jpg/${item}`} className="img" />
        ))}
      </Slider>
    </CarouselWrapper>
  )
})

Carousel.propTypes = {
  imgList: PropTypes.array,
}
export default Carousel
