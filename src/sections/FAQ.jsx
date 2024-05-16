import { useState } from 'react';

import { ButtonAndStars, FAQGirls } from '../components';

export const FAQ = () => {
  const [open, setOpen] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  return (
    <div className='flex flex-col wide:flex-row wide:justify-between wide:gap-[88px] items-center tracking-wider wide:items-start text-md2 wide:text-base2'>
      <div>
        <h2 className='text-primary-navy max-w-[318px] mx-auto wide:w-full text-4xl3 wide:text-5xl tracking-widest text-center wide:text-left lowercase wide:normal-case mb-10'>
          Frequently asked questions.
        </h2>

        <div className='cursor-pointer'>
          <hr className='w-[330px] wide:w-[630px]' />
          {Array.from({ length: 6 }, (_, index) => (
            <>
              <div
                key={index}
                className='py-[18px] wide:py-[23px] w-[320px] wide:w-[600px]'
                onClick={() =>
                  setOpen((prev) => ({
                    ...prev,
                    [index + 1]: !prev[index + 1],
                  }))
                }
              >
                <div className='flex justify-between text-lg2'>
                  <p className='text-primary-navy'>
                    lorem ipsum dolor sit amet
                  </p>
                  <p className='text-primary-navy text-7xl'>
                    {open[index + 1] ? '–' : '+'}
                  </p>
                </div>

                {open[index + 1] && (
                  <p className='max-w-[333px] wide:max-w-[567px] mt-[10px]'>
                    Our fabrics and garments are made in Portugal. We build
                    strong relationships with our immediate suppliers and visit
                    as often as possible.
                  </p>
                )}
              </div>
              <hr className='w-[330px] wide:w-[630px]' />
            </>
          ))}
        </div>
      </div>

      <div className='hidden wide:block relative'>
        <FAQGirls />
      </div>

      <div className='wide:hidden mt-7 wide:mt-16'>
        <ButtonAndStars />
      </div>
    </div>
  );
};
