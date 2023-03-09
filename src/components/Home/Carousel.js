import PropTypes from 'prop-types'
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import React, { useState } from 'react'

const Carousel = props => {
   const [activeThumb, setActiveThumb] = useState()

   return <>
      <Swiper
         loop={true}
         spaceBetween={10}
         navigation={true}
         modules={[Navigation, Thumbs]}
         grabCursor={true}
         thumbs={{ swiper: activeThumb }}
         className='Project-images-slider'
      >
         {
            props.images.map((item, index) => (
               <SwiperSlide key={index}>
                  <img src={item} alt="Project images" />
               </SwiperSlide>
            ))
         }
      </Swiper>
      <Swiper
         onSwiper={setActiveThumb}
         loop={true}
         spaceBetween={10}
         slidesPerView={4}
         modules={[Navigation, Thumbs]}
         className='Project-images-slider-thumbs'
      >
         {
            props.images.map((item, index) => (
               <SwiperSlide key={index}>
                  <div className="Project-images-slider-thumbs-wrapper">
                     <img src={item} alt="Project images" />
                  </div>
               </SwiperSlide>
            ))
         }
      </Swiper>
   </>
}

Carousel.propTypes = {
   images: PropTypes.array.isRequired
}

export default Carousel