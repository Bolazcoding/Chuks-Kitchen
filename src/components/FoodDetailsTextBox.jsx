import { memo } from "react";

const FoodDetailsTextBox = memo(
  ({ children, className = "", textColor = "" }) => {
    return (
      <p
        className={`text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%] ${textColor} ${className} `}
      >
        {children}
      </p>
    );
  },
);

export default FoodDetailsTextBox;
{
  /* <p className={`${textColor} ${className}`}>{children}</p>; */
}
