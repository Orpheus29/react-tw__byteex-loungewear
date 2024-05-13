import logo from '../assets/images/logo.svg';
import { Button, HeroGirls } from '../components';

export const Hero = () => {
  return (
    <div className='flex-col wide:flex justify-center wide:justify-between items-center text-primary-sofia wide:max-container pt-[14px] wide:pt-[33px] pb-[86px] wide:pb-[61.52px]'>
      <div className='flex-col justify-center items-center tracking-wider wide:flex wide:items-start'>
        <a
          href='/'
          className=' wide:-ml-2'
        >
          <img
            src={logo}
            alt='logo'
            className='mb-[13.67px] wide:mb-[61.67px] w-[200px] h-[35px]'
          />
        </a>
        <h1 className='text-primary-navy font-sofia text-4xl2 wide:text-6xl pb-[17px]'>
          Don’t apologize for being comfortable.
        </h1>
        <div className='wide:hidden relative mt-[17px] mb-[25px]'>
          <HeroGirls />
        </div>
        <div className='grid gap-y-[26px] wide:gap-y-[17px] pt-[25px] wide:pt-[32px] pb-[29px] wide:pb-[35px]'>
          <p className='font-sofia '>
            Beautiful, comfortable loungewear for day or night.
          </p>
          <p className=''>
            No wasteful extras, like tags or plastic packaging.
          </p>
          <p className=''>
            Our signature fabric is incredibly comfortable — unlike anything
            you’ve ever felt.
          </p>
        </div>
        <Button arrowMode={'-mb-[30px]'} />
      </div>
      <div className='hidden wide:block relative'>
        <HeroGirls />
      </div>
    </div>
  );
};
