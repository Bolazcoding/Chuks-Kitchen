function Button({
  children,
  onClick,
  bgColor = "",
  textColor = "",
  border = "",
  className = "",
}) {
  //   const baseStyles =
  //     "px-6 py-2 rounded-xl font-semibold transition duration-300 focus:outline-none";

  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${border} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
