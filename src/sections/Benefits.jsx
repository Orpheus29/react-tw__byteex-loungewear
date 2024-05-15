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
import stars from '../assets/images/stars.png';

import { cart, cloud, leaf, sun_moon, waves } from '../assets/icons/benefits';

import { SwiperGirls, Button } from '../components';

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
        <Swiper
          loop
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
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

      <div className='max-w-screen-small mx-auto text-md1 wide:max-w-screen-wide flex justify-center wide:justify-between gap-[217px] items-center tracking-widest wide:items-start'>
        <div>
          <h2 className='text-primary-navy text-4xl2 wide:text-5xl tracking-widest pl-7 text-center wide:text-left mb-[25px] wide:mb-[85px]'>
            Loungewear you can be proud of.
          </h2>

          <div className='wide:hidden mt-[25px] mb-[61px] pl-16'>
            <SwiperGirls />
          </div>

          <div className='grid justify-center wide:justify-start wide:items-start wide:text-base3 gap-y-[26px] wide:gap-y-8 pb-[29px] wide:pb-0 pl-7'>
            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center justify-center wide:justify-start wide:items-start'>
              <div>
                <img
                  src={cloud}
                  alt='cloud icon'
                  className='wide:hidden ml-7 mb-5 rounded-full w-[42px] h-42px]'
                />

                <img
                  src={cart}
                  alt='cart icon'
                  className='hidden wide:block rounded-full w-[42px] h-42px] -mt-2'
                />
              </div>

              <div>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest pl-7 wide:pl-0 text-center wide:text-left mb-[25px] wide:mb-[14px]'>
                  Ethically sourced.
                </h3>

                <p className='text-center w-[264px] wide:w-[497px] pl-7 wide:pl-0 wide:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>

              <p className='w-[334px] h-[1px] bg-secondary-border opacity-50 mt-12 wide:hidden ml-7'></p>
            </div>

            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center justify-center wide:justify-start wide:items-start'>
              <div>
                <img
                  src={sun_moon}
                  alt='sun_moon icon'
                  className='wide:hidden ml-7 mb-5 rounded-full w-[42px] h-[42px]'
                />

                <img
                  src={leaf}
                  alt='leaf icon'
                  className='hidden wide:block rounded-full w-[42px] h-42px] -mt-2'
                />
              </div>

              <div>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest pl-7 wide:pl-0 text-center wide:text-left mb-[25px] wide:mb-[14px]'>
                  Responsibly made.
                </h3>

                <p className='text-center w-[264px] wide:w-[497px] pl-7 wide:pl-0 wide:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <p className='w-[334px] h-[1px] bg-secondary-border opacity-50 mt-12 wide:hidden ml-7'></p>
            </div>

            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center justify-center wide:justify-start wide:items-start'>
              <div>
                <img
                  src={leaf}
                  alt='leaf icon'
                  className='wide:hidden ml-7 mb-5 rounded-full w-[42px] h-[42px]'
                />
                <img
                  src={sun_moon}
                  alt='sun_moon icon'
                  className='hidden wide:block rounded-full w-[42px] h-42px] -mt-2'
                />
              </div>

              <div>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest pl-7 wide:pl-0 text-center wide:text-left mb-[25px] wide:mb-[14px]'>
                  Made for living in.
                </h3>

                <p className='text-center w-[264px] wide:w-[497px] pl-7 wide:pl-0 wide:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <p className='w-[334px] h-[1px] bg-secondary-border opacity-50 mt-12 wide:hidden ml-7'></p>
            </div>

            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center justify-center wide:justify-start wide:items-start'>
              <div>
                <img
                  src={waves}
                  alt='waves icon'
                  className='ml-7 mb-5 rounded-full w-[42px] h-[42px] wide:ml-0 wide:-mt-2'
                />
              </div>

              <div>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest pl-7 wide:pl-0 text-center wide:text-left mb-[25px] wide:mb-[14px]'>
                  Unimaginably comfortable.
                </h3>

                <p className='text-center w-[264px] wide:w-[497px] pl-7 wide:pl-0 wide:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </div>
          </div>

          <div className='wide:hidden flex flex-col items-center justify-center mt-8 mb-11 ml-7'>
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

        <div className='hidden wide:block'>
          <SwiperGirls />
        </div>
      </div>
    </div>
  );
};
