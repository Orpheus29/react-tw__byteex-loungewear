import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css';

import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
} from '../assets/images/brands';
// import { Button } from '../components';
// import { SwiperHeroes } from '../assets/images';

export const Benefits = () => {
  return (
    <div className='wide:max-w-screen-wide mx-auto text-primary-suisse tracking-wider pt-20 pb-11 wide:pb-14'>
      <p className='text-base1 wide:text-xl1 text-center mb-4 pl-7'>
        as seen in
      </p>

      <div className='hidden wide:flex h-[54px] mb-[110px] justify-between items-center'>
        <img
          src={brand1}
          alt='brand1 logo'
          className='w-[178px] h-[22px]'
        />
        <img
          src={brand2}
          alt='brand2 logo'
          className='w-[111px] h-[52px]'
        />
        <img
          src={brand3}
          alt='brand3 logo'
          className='w-[271px] h-[53px]'
        />
        <img
          src={brand4}
          alt='brand4 logo'
          className='w-[194px] h-[37px]'
        />
        <img
          src={brand5}
          alt='brand5 logo'
          className='w-[192px] h-[58px]'
        />
      </div>

      <div className='wide:hidden max-w-[420px] mb-10 mx-auto pl-8'>
        {/* <div className='flex flex-col w-[40%] h-[20%] justify-center items-center'> */}
        <Swiper
          loop
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          width={400}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
        >
          <SwiperSlide>
            <img
              src={brand1}
              alt='brand1 logo'
              className='py-4'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={brand2}
              alt='brand2 logo'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={brand3}
              alt='brand3 logo'
              className='py-3'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={brand4}
              alt='brand4 logo'
              className='py-3'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={brand5}
              alt='brand5 logo'
              className='py-1'
            />
          </SwiperSlide>
        </Swiper>

        <div className='custom-pagination' />
      </div>

      <div className='max-w-screen-small wide:max-w-screen-wide mx-auto flex wide:justify-between gap-[101px] items-center tracking-wider wide:items-start'>
        <div>
          <h1 className='text-primary-navy text-4xl2 wide:text-5xl tracking-widest text-center wide:text-left mb-[25px] wide:mb-[85px]'>
            Loungewear you can be proud of.
          </h1>
        </div>
      </div>
    </div>
  );
};
