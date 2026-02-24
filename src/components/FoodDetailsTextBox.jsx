import { memo } from "react";

const FoodDetailsTextBox = memo(
  ({ children, className = "", textColor = "" }) => {
    return (
      <span
        className={`text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%] ${textColor} ${className} `}
      >
        {children}
      </span>
    );
  },
);

export default FoodDetailsTextBox;
{
  /* <p className={`${textColor} ${className}`}>{children}</p>; */
}
