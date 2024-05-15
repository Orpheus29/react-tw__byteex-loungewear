import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import { Button, CommentCard } from '../components';
import stars from '../assets/images/stars.png';
import { comments } from '../constants';

export const FansComments = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-primary-navy text-4xl3 wide:text-5xl tracking-widest mb-6 wide:mb-12'>
        What are our fans saying?
      </h2>

      <p className='wide:w-[600px] text-center mb-16'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>

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
