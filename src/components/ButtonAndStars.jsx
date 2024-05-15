import { Button } from './Button';
import stars from '../assets/images/stars.png';

export const ButtonAndStars = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
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
  );
};
