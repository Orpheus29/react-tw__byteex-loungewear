export const BrandCard = ({ imgURL, label, sizes }) => {
  return (
    <img
      src={imgURL}
      alt={label}
      className={sizes}
    />
  );
};
