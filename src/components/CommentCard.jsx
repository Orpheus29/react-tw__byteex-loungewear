import stars from '../assets/images/stars.png';
import commenter from '../assets/images/commenter.png';

export const CommentCard = ({ name, text }) => {
  return (
    <div className='relative w-[299px] wide:w-[338px] bg-white flex flex-col box-border border-[1px] border-thirdary-border rounded-[8px] px-8 wide:px-10 py-8 shadow-inner'>
      <div className='flex mb-3 items-center'>
        <img
          src={commenter}
          alt='commenter_photo'
          className='w-[35px] h-[35px] mr-3'
        />

        <div>
          <div className='mr-2'>
            <img
              src={stars}
              alt='stars'
              className='w-[60px] h-[10px] mb-[3px]'
            />
          </div>

          <p className='tracking-wider'>{name}</p>
        </div>
      </div>

      <p className='text-xsm1 wide:text-xsm2 font-suisse'>{text}</p>
    </div>
  );
};
