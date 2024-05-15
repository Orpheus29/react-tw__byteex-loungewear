import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import { Button, CommentCard } from '../components';
import stars from '../assets/images/stars.png';
import { customers } from '../assets/images/customers';
import { comments } from '../constants';

export const FansComments = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-primary-navy text-center text-4xl3 wide:text-5xl tracking-widest mb-6 wide:mb-12'>
        What are our fans saying?
      </h2>

      <p className='w-[370px] wide:w-[600px] text-center mb-16'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>

      <div className='flex flex-wrap overflow-hidden justify-between max-w-[420px] wide:max-w-[1440px] h-[206px] wide:h-[260px] mb-[38px] wide:mb-[76px]'>
        {customers.map((customer, index) => {
          return (
            <div
              className='gap-[5px] mt-[3px] w-[102px] wide:w-[128px]'
              key={index}
            >
              <img
                src={customer}
                alt='customer photo'
                className='h-full'
              />
            </div>
          );
        })}
      </div>

      <Swiper
        slidesPerView={'auto'}
        loop
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation
        grabCursor
        spaceBetween={10}
        pagination={{
          el: '.swiper-custom-pagination',
          clickable: true,
        }}
        className='max-w-[299px] wide:max-w-[1040px]'
      >
        {comments.map((comment, index) => (
          <SwiperSlide key={index}>
            <CommentCard
              key={comment.name}
              {...comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='swiper-custom-pagination' />

      <div className='flex flex-col items-center justify-center mt-7 wide:mt-16'>
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
