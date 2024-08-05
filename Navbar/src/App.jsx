  
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slider1 from './assets/Slider 1.webp'
import Slider2 from './assets/Slider2.webp';
import Slider3 from'./assets/Slider 3.webp';
import Slider4 from './assets/Slider4.webp';

import Slider6 from './assets/Slider6.webp';

const App = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {};

  useEffect(() => {
    const images = [Slider1, Slider2, Slider3, Slider4,Slider6];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <>
      <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 mt-5 mx-auto sm:mb-10 md:mb-10 mb-7 relative">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img src={Slider1} alt="Slider 1" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img src={Slider2} alt="Slider 2" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img src={Slider3} alt="Slider 3" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img src={Slider4} alt="Slider 4" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img src={Slider6} alt="Slider 5" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default App;