export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "cta";
  disabled?: boolean;
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "text-foreground  bg-accent hover:bg-[#4318D1]/80 text-white ",
  secondary:
    "bg-gray-200   text-gray-700 border-foreground hover:bg-gray-300 hover:text-gray-800",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  cta: "bg-foreground text-white text-[16px] font-[600] rounded-[12px] hover:opacity-[80%] transition-colors",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        text-[14px] font-[500] rounded-full  transition duration-300  cursor-pointer hover:scale-[1.01]
        ${variantClasses[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
