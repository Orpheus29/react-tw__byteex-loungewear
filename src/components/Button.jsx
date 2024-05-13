import arrow from '../assets/icons/arrow.svg';

export const Button = ({ arrowMode }) => {
  return (
    <button
      className={
        'flex items-center font-suisse text-white text-lg1 border-none bg-primary-navy w-[356px] rounded-[5px] pt-4 pb-[16px] pl-16'
      }
    >
      Customize Your Outfit
      <img
        src={arrow}
        alt='logo'
        width={23}
        height={10}
        className={`${
          arrowMode && `${arrowMode}`
        } w-[23px] h-[10px] ml-6`}
      />
    </button>
  );
};
