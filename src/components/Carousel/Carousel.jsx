import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Carousel.css';

// Importa las imágenes desde la carpeta assets
import netflixImage from '../../assets/p1.jpg';
import disneyPlusImage from '../../assets/p2.jpg';
import hboMaxImage from '../../assets/p3.jpg';
import primeVideoImage from '../../assets/p4.jpg';
import appleTvImage from '../../assets/p5.jpg';
import applTvImage from '../../assets/p6.jpg';


const Carousel = () => {
  // Lista de plataformas con sus imágenes y nombres
  const platforms = [
    { name: '', image: netflixImage },
    { name: '', image: disneyPlusImage },
    { name: '', image: hboMaxImage },
    { name: '', image: primeVideoImage },
    { name: '+', image: appleTvImage },
    { name: '', image: applTvImage },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {platforms.map((platform, index) => (
          <SwiperSlide key={index}>
            <div className="platform-card">
              <img src={platform.image} alt={platform.name} />
              <h3>{platform.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Carousel;