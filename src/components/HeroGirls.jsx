export const HeroGirls = () => {
  return (
    <div className='flex items-center relative w-[380px] wide:w-[725px] h-[222px] wide:h-[422px]'>
      <div className='absolute w-[70px] h-[99px] wide:w-[134px] wide:h-[189px] bg-gradient-to-b from-transparent to-primary-bg' />
      <div className='absolute bg-hero2 left-[35px] wide:left-[67px] w-[90px] h-[166px] wide:w-[209px] wide:h-[317px] bg-no-repeat bg-cover' />

      <div className='absolute bg-hero1 z-10 left-[125px] wide:left-[240px] w-[136px] h-[221px] wide:w-[255px] wide:h-[415px] bg-pos-80 bg-no-repeat border-2 border-white' />

      <div className='absolute bg-hero3 z-0 right-[35px] wide:right-[57px] w-[90px] h-[166px] bg-cover wide:w-[209px] wide:h-[317px] bg-no-repeat bg-left' />
      <div className='absolute -z-10 right-0 w-[70px] h-[99px] wide:w-[134px] wide:h-[189px] bg-gradient-to-b from-transparent to-primary-bg' />
    </div>
  );
};
