import { memo } from "react";

const HeaderText = memo(({ children, className = "", textColor = "" }) => {
  return (
    <h2
      className={`text-[32px] text-text-color leading-10.5 font-bold ${textColor} ${className}`}
    >
      {children}
    </h2>
  );
});

export default HeaderText;
