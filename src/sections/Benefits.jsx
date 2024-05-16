import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css';

import { brands } from '../constants';
import { SwiperGirls, ButtonAndStars, BrandCard } from '../components';
import { cart, cloud, leaf, sun_moon, waves } from '../assets/icons/benefits';

export const Benefits = () => {
  return (
    <div className='max-w-screen-small wide:max-w-screen-wide mx-auto text-primary-suisse tracking-wider pt-20 pb-11 wide:pb-14'>
      <p className='text-base1 wide:text-xl1 text-center mb-4'>as seen in</p>

      <div className='hidden wide:flex h-[54px] mb-[110px] justify-between items-center'>
        {brands.map((brand) => (
          <BrandCard
            key={brand.label}
            {...brand}
          />
        ))}
      </div>

      <div className='wide:hidden max-w-[420px] mb-10 mx-auto'>
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
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <BrandCard
                key={brand.label}
                {...brand}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-pagination' />
      </div>

      <div className='max-w-screen-small mx-auto text-md1 wide:max-w-screen-wide flex justify-center wide:justify-between gap-[217px] items-center tracking-widest wide:items-start'>
        <div>
          <h2 className='text-primary-navy text-4xl2 wide:text-5xl tracking-widest text-center wide:text-left mb-[25px] wide:mb-[85px]'>
            Loungewear you can be proud of.
          </h2>

          <div className='wide:hidden mt-[25px] mb-[61px] flex justify-center'>
            <SwiperGirls />
          </div>

          <div className='grid wide:text-base3 gap-y-[26px] wide:gap-y-8 wide:pb-0'>
            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center wide:items-start'>
              <div>
                <img
                  src={cloud}
                  alt='cloud icon'
                  className='wide:hidden mb-5 rounded-full w-[42px] h-42px]'
                />

                <img
                  src={cart}
                  alt='cart icon'
                  className='hidden wide:block rounded-full w-[42px] h-42px] -mt-2'
                />
              </div>

              <div className='text-center wide:text-left'>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest mb-[25px] wide:mb-[14px]'>
                  Ethically sourced.
                </h3>

                <p className='w-[264px] wide:w-[497px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>

              <p className='w-[334px] h-[1px] bg-secondary-border opacity-50 mt-12 wide:hidden'></p>
            </div>

            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center wide:items-start'>
              <div>
                <img
                  src={sun_moon}
                  alt='sun_moon icon'
                  className='wide:hidden mb-5 rounded-full w-[42px] h-[42px]'
                />

                <img
                  src={leaf}
                  alt='leaf icon'
                  className='hidden wide:block rounded-full w-[42px] h-42px] -mt-2'
                />
              </div>

              <div className='text-center wide:text-left'>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest mb-[25px] wide:mb-[14px]'>
                  Responsibly made.
                </h3>

                <p className='w-[264px] wide:w-[497px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <p className='w-[334px] h-[1px] bg-secondary-border opacity-50 mt-12 wide:hidden'></p>
            </div>

            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center wide:items-start'>
              <div>
                <img
                  src={leaf}
                  alt='leaf icon'
                  className='wide:hidden mb-5 rounded-full w-[42px] h-[42px]'
                />
                <img
                  src={sun_moon}
                  alt='sun_moon icon'
                  className='hidden wide:block rounded-full w-[42px] h-42px] -mt-2'
                />
              </div>

              <div className='text-center wide:text-left'>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest mb-[25px] wide:mb-[14px]'>
                  Made for living in.
                </h3>

                <p className='w-[264px] wide:w-[497px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>

              <p className='w-[334px] h-[1px] bg-secondary-border opacity-50 mt-12 wide:hidden'></p>
            </div>

            <div className='flex flex-col wide:flex-row wide:gap-x-[32px] items-center wide:items-start'>
              <div>
                <img
                  src={waves}
                  alt='waves icon'
                  className='mb-5 rounded-full w-[42px] h-[42px] wide:-mt-2'
                />
              </div>

              <div className='text-center wide:text-left'>
                <h3 className='text-primary-navy text-xl2 wide:text-2xl2 tracking-widest mb-[25px] wide:mb-[14px]'>
                  Unimaginably comfortable.
                </h3>

                <p className='w-[264px] wide:w-[497px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </div>
          </div>

          <div className='wide:hidden mt-12'>
            <ButtonAndStars />
          </div>
        </div>

        <div className='hidden wide:block'>
          <SwiperGirls />
        </div>
      </div>
    </div>
  );
};
