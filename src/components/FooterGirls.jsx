export const FooterGirls = () => {
  return (
    <div className='flex items-center relative w-[360px] wide:w-[815px] h-[211px] wide:h-[373px]'>
      <div className='absolute w-[67px] h-[95px] wide:w-[139px] wide:h-[196px] bg-gradient-to-b from-transparent to-primary-bg' />
      <div className='absolute bg-hero7 left-[27px] wide:left-[69px] w-[97px] h-[148px] wide:w-[209px] wide:h-[317px] bg-no-repeat bg-cover' />

      <div className='absolute bg-hero8 z-10 left-[114px] wide:left-[283px] w-[136px] h-[221px] wide:w-[248px] wide:h-[373px] bg-pos-80 bg-no-repeat wide:border-2 border-white' />

      <div className='absolute bg-hero2 z-0 right-[27px] wide:right-[69px] w-[97px] h-[148px] bg-cover wide:w-[209px] wide:h-[317px] bg-no-repeat bg-left' />
      <div className='absolute -z-10 right-0 w-[67px] h-[95px] wide:w-[139px] wide:h-[196px] bg-gradient-to-b from-transparent to-primary-bg' />
    </div>
  );
};
