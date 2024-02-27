function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={` px-4 rounded-lg py-2 ${className} ${bgColor} ${textColor} `} 
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
