export const ServiceCard = ({
  imgURL,
  label,
  subtext,
  background,
}) => {
  return (
    <div
      className={`bg-${background} rounded-[8px] px-12 wide:px-9 py-14 wide:py-20 w-[288px] h-[288px] wide:w-full wide:h-full border-[1px] border-primary-border text-center tracking-wider`}
    >
      <div className='flex justify-center mb-3'>
        <img
          src={imgURL}
          alt={label}
        />
      </div>
      <h3 className='mb-3 text-2xl3 text-primary-navy tracking-widest'>
        {label}
      </h3>
      <p>{subtext}</p>
    </div>
  );
};
