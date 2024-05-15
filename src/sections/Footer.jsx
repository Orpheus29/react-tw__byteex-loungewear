import { BottomInfo, Button, ButtonAndStars, FooterGirls } from '../components';
import payment from '../assets/images/payment-systems.png';

export const Footer = () => {
  return (
    <div className='flex flex-col items-center text-base2'>
      <h2 className='text-primary-navy text-center text-4xl3 wide:text-5xl tracking-widest mb-5'>
        Find something you love.
      </h2>

      <p className='wide:hidden text-center tracking-wider'>
        Click below to browse our collection!
      </p>

      <p className='hidden wide:block w-[570px] text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat.
      </p>

      <div className='relative mt-11 wide:mt-[58px] flex justify-center'>
        <FooterGirls />
      </div>

      <div className='wide:hidden mt-[52px]'>
        <ButtonAndStars />
      </div>

      <div className='hidden wide:block mt-[58px]'>
        <Button />

        <img
          src={payment}
          alt='shipping and payment info'
          className='w-[364px] h-[22px] mt-[6px] mb-[18px]'
        />
      </div>

      <BottomInfo />
    </div>
  );
};
