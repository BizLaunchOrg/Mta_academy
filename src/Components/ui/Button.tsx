import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 hover:scale-105";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-primary-container text-on-primary",
    ghost: "bg-transparent border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;