export const AdvantageCard = ({ imgURL, text, label }) => {
  return (
    <p className='flex items-center'>
      <img
        src={imgURL}
        alt={`${label} icon`}
        className='mr-3 rounded-full w-[31px] h-[31px]'
      />
      {text}
    </p>
  );
};
