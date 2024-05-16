import { AdvantageCard, Button, HeroGirls } from '../components';
import logo from '../assets/images/logo.svg';
import stars from '../assets/images/stars.png';
import commenter from '../assets/images/commenter.png';
import { advantages } from '../constants';

export const Hero = () => {
  return (
    <div className='text-sm1 text-primary-sofia pt-[14px] wide:pt-[33px]'>
      <a
        href='/'
        className='wide:-ml-2'
      >
        <img
          src={logo}
          alt='logo'
          className='mb-[13.67px] wide:mb-[61.67px] w-[200px] h-[35px] my-0 mx-auto wide:mx-0'
        />
      </a>

      <div className='flex justify-center wide:justify-between gap-[101px] items-center tracking-wider wide:items-start'>
        <div>
          <h1 className='text-primary-navy text-4xl2 wide:text-6xl tracking-widest text-center wide:text-left'>
            Don’t apologize for being comfortable.
          </h1>

          <div className='wide:hidden relative mt-[17px] flex justify-center'>
            <HeroGirls />
          </div>

          <div className='grid wide:text-base3 gap-y-[26px] wide:gap-y-[17px] px-[47px] wide:px-0 pt-[25px] wide:pt-[32px] pb-[29px] wide:pb-[35px]'>
            {advantages.map((advantage) => (
              <AdvantageCard
                key={advantage.label}
                {...advantage}
              />
            ))}
          </div>

          <div className='hidden wide:flex justify-center wide:justify-start mb-[31px] wide:mb-[46px]'>
            <Button arrowMode={'-mb-[30px]'} />
          </div>

          <div className='wide:hidden flex justify-center wide:justify-start mb-[31px] wide:mb-[46px]'>
            <Button />
          </div>

          <div className='relative w-full bg-white flex flex-col border-[1px] border-primary-border rounded-[8px] px-3 wide:px-5 py-4 shadow-md'>
            <div className='flex mb-3 items-center'>
              <img
                src={commenter}
                alt='commenter_photo'
                className='w-[35px] h-[35px] mr-3'
              />

              <span className='hidden wide:block mr-4 tracking-wider'>
                Amy, P.
              </span>

              <div>
                <div className='flex items-center'>
                  <div className='mr-2'>
                    <img
                      src={stars}
                      alt='stars'
                      className='w-[60px] h-[10px] mb-[2px]'
                    />
                  </div>

                  <p className='font-suisse text-xxsm1 text-secondary-suisse'>
                    One of 500+ 5 Star Reviews Online
                  </p>
                </div>

                <p className='wide:hidden tracking-wider'>Jane, S.</p>
              </div>
            </div>

            <p className='wide:hidden text-xsm2 font-suisse'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo.
            </p>
            <p className='hidden wide:block text-xsm2 font-suisse'>
              Overjoyed with my Loungewear set. I have the jogger and the
              sweatshirt. Quality product on every level. From the compostable
              packaging, to the supplied washing bag, even the garments smells
              like fresh herbs when I first held them.
            </p>
          </div>
        </div>

        <div className='hidden wide:block relative'>
          <HeroGirls />
        </div>
      </div>
    </div>
  );
};
