import { lorry, shield, cart } from '../assets/icons/footer';

export const BottomInfo = () => {
  return (
    <div className='hidden wide:flex gap-6 justify-between items-center'>
      <div className='flex items-center tracking-wider'>
        <div className='flex justify-center mr-3'>
          <img
            src={lorry}
            alt='lorry icon'
          />
        </div>

        <p className='text-md2 w-32'>FREE Shipping on Orders over $200</p>

        <div className='flex w-[1px] h-[51px] bg-secondary-border ml-6'></div>
      </div>

      <div className='flex items-center tracking-wider'>
        <div className='flex justify-center mr-3'>
          <img
            src={shield}
            alt='shield icon'
          />
        </div>

        <p className='text-md2 w-32'>Over 500+ 5 Star Reviews Online</p>

        <div className='flex w-[1px] h-[51px] bg-secondary-border ml-6'></div>
      </div>

      <div className='flex items-center tracking-wider'>
        <div className='flex justify-center mr-3'>
          <img
            src={cart}
            alt='cart icon'
          />
        </div>

        <p className='text-md2 w-32'>Made ethically and responsibly.</p>
      </div>
    </div>
  );
};
