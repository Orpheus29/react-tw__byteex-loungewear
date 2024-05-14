import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
} from '../assets/images/brands';

export const Benefits = () => {
  return (
    <div className='max-w-screen-small my-0 mx-auto wide:max-w-screen-wide text-primary-suisse tracking-wider pt-20 pb-11 wide:pb-14'>
      <p className='text-base1 wide:text-xl1 text-center'>as seen in</p>

      <div className='hidden wide:flex h-[54px] justify-between items-center mt-4'>
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

    </div>
  );
};
