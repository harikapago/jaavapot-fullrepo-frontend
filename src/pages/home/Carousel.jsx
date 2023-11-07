import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from '../../assets/img/home/carousel/raagi-porridge-01.jpg';
import img2 from '../../assets/img/home/carousel/Porridge-02.jpg';
import img3 from '../../assets/img/home/carousel/Paanakam-03.jpg';
import img4 from '../../assets/img/home/carousel/oats-porridge-sweet-04.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Carousel() {
  const imageStyle = {
    maxWidth: '50%',
    height: '22rem',
    padding:'20px',
    paddingTop:'20px'
  };

  return (
    <div className='pt-5'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
        
        }}
        autoplay={{ delay: 3000 }} 
      >
        {/* SwiperSlide for the first image */}
        <SwiperSlide>
          <img src={img1} style={imageStyle} alt="Image 1" />
        </SwiperSlide>

        {/* SwiperSlide for the second image */}
        <SwiperSlide>
          <img src={img2} style={imageStyle} alt="Image 2" />
        </SwiperSlide>

        {/* SwiperSlide for the third image */}
        <SwiperSlide>
          <img src={img3} style={imageStyle} alt="Image 3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} style={imageStyle} alt="Image 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;