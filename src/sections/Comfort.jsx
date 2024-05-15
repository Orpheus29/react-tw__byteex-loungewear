import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import { ButtonAndStars, ServiceCard } from '../components';
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

      <div className='mt-10 wide:mt-14'>
        <ButtonAndStars />
      </div>
    </div>
  );
};
