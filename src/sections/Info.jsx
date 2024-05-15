import { bolt, cloud, drop } from '../assets/icons/info';

export const Info = () => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-thirdary-navy text-3xl tracking-widest mb-[38px] wide:mb-[18px] capitalize wide:normal-case'>
        Our total green impact
      </h3>

      <div className='flex flex-col wide:flex-row gap-6 wide:gap-12 justify-between items-center'>
        <div className='wide:flex text-center tracking-wider'>
          <div className='flex-col'>
            <div className='flex justify-center mb-[13px] wide:pt-2'>
              <img
                src={cloud}
                alt='cloud icon'
              />
            </div>
            <h4 className='mb-2 text-2xl1 text-thirdary-navy font-semibold'>
              3,927 kg
            </h4>
            <p className='text-md2 text-thirdary-navy'>of CO2 saved</p>
          </div>

          <div className='hidden wide:flex w-[1px] h-[122px] bg-secondary-border ml-12'></div>

          <hr className='wide:hidden w-[282px] mt-5 border-secondary-border' />
        </div>

        <div className='wide:flex text-center tracking-wider'>
          <div className='flex-col'>
            <div className='flex justify-center mb-[13px] wide:pt-2'>
              <img
                src={drop}
                alt='drop icon'
              />
            </div>
            <h4 className='mb-2 text-2xl1 text-thirdary-navy font-semibold'>
              2,546,167 days
            </h4>
            <p className='text-md2 text-thirdary-navy'>
              of drinking water saved
            </p>
          </div>

          <div className='hidden wide:flex w-[1px] h-[122px] bg-secondary-border ml-12'></div>

          <hr className='wide:hidden w-[282px] mt-5 border-secondary-border' />
        </div>

        <div className='hidden wide:flex text-center tracking-wider'>
          <div className='flex-col'>
            <div className='flex justify-center mb-[13px] wide:pt-2'>
              <img
                src={bolt}
                alt='bolt icon'
              />
            </div>
            <h4 className='mb-2 text-2xl1 text-thirdary-navy font-semibold'>
              7,321 kWh
            </h4>
            <p className='text-md2 text-thirdary-navy'>of energy saved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
