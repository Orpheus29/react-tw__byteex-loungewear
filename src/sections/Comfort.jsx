import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import { Button, ServiceCard } from '../components';
import stars from '../assets/images/stars.png';
import { services } from '../constants';

export const Comfort = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-primary-navy text-4xl3 wide:text-5xl tracking-widest mb-6 wide:mb-12'>
        Comfort made easy
      </h2>

      <div className='hidden wide:flex gap-10 justify-between items-center'>
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            {...service}
          />
        ))}
      </div>

      <Swiper
        slidesPerView={'auto'}
        loop
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation
        grabCursor
        spaceBetween={10}
        className='wide:hidden max-w-[288px]'
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              key={service.label}
              {...service}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex flex-col items-center justify-center mt-10 wide:mt-14'>
        <Button />

        <div className='mt-3'>
          <div className='flex items-center'>
            <div className='mr-[14px]'>
              <img
                src={stars}
                alt='stars'
                className='w-[80px] h-[13px] mb-[3px]'
              />
            </div>

            <p className='font-suisse text-xsm1 text-secondary-suisse'>
              One of 500+ 5 Star Reviews Online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
