import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';

import { SwiperHeroes as slides } from '../assets/images';

export const SwiperGirls = () => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className='flex flex-col w-[303px] wide:w-[433px] h-[453px] wide:h-[648px] justify-center items-center'>
      <Swiper
        slidesPerView={'auto'}
        loop
        modules={[Navigation, Thumbs, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation
        thumbs={{ swiper: activeThumb }}
        grabCursor
        spaceBetween={5}
        className='swiper -mb-[82px]'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={'t' + index}>
            <img
              src={slide}
              alt='cloth_name'
              className='w-[303px] wide:w-[433px] h-[453px] wide:h-[648px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='mt-5'>
        <Swiper
          loop
          onClick={setActiveThumb}
          modules={[Navigation, Thumbs]}
          spaceBetween={5}
          slidesPerView={'auto'}
          className='swiper-thumbs'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={'t' + index}>
              <img
                src={slide}
                alt='cloth_name'
                className='h-10 w-10 object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <span className='font-suisse text-sm2 mt-7'>White robe</span>
    </div>
  );
};
