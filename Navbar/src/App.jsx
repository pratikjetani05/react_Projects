import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slider7 from './assets/Slider7.webp';
import Slider6 from './assets/Slider6.webp';
import Slider5 from './assets/Slider5.webp';

const App = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {};

  useEffect(() => {
    const images = [Slider5, Slider7, Slider6];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="relative mt-5 mx-auto mb-7">
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
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <img src={Slider7} alt="Slider 1" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <img src={Slider5} alt="Slider 2" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] ml-2  sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <img src={Slider6} alt="Slider 5" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
