import PropTypes from 'prop-types'
import react, { memo, useState } from 'react'
import Slider from 'react-slick'

import { IMG_URL } from '@/services/request/config'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselModalWrapper, ModalWrapper } from './style'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const CarouselModal = memo((props) => {
  const { imgList } = props
  const [open, setOpen] = useState(false)
  const [slideImg, setSlideImg] = useState(0)
  const handleClose = () => setOpen(false)
  const handleOpen = (index) => {
    setSlideImg(index)
    setOpen(true)
  }
  const settings = {
    customPaging: function (i) {
      return <img src={`${IMG_URL}/jpg/Room${i + 1}.jpg`} />
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: slideImg,
  }

  return (
    <CarouselModalWrapper>
      <div className="left">
        <img key={0} onClick={() => handleOpen(0)} src={`${IMG_URL}/jpg/${imgList[0]}`} className="img hover-mask" />
      </div>
      <div className="center">
        <img key={1} onClick={() => handleOpen(1)} src={`${IMG_URL}/jpg/${imgList[1]}`} className="img hover-mask " />
        <img key={2} onClick={() => handleOpen(2)} src={`${IMG_URL}/jpg/${imgList[2]}`} className="img hover-mask " />
      </div>
      <div className="right">
        <img key={3} onClick={() => handleOpen(3)} src={`${IMG_URL}/jpg/${imgList[3]}`} className="img hover-mask " />
        <img key={4} onClick={() => handleOpen(4)} src={`${IMG_URL}/jpg/${imgList[4]}`} className="img hover-mask " />
      </div>
      <Button className="more" variant="outlined" size="large" onClick={() => handleOpen(0)}>
        查看更多
      </Button>
      <ModalWrapper
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal">
          <Button className="close" size="medium" onClick={handleClose}>
            X
          </Button>
          <div className="slider-container">
            <Slider {...settings}>
              {imgList.map((item, idx) => (
                <img key={idx} src={`${IMG_URL}/jpg/${item}`} className="img" />
              ))}
            </Slider>
          </div>
        </Box>
      </ModalWrapper>
    </CarouselModalWrapper>
  )
})

CarouselModal.propTypes = {
  imgList: PropTypes.array,
}
export default CarouselModal
