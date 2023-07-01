import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: "primary" | "small" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, disabled, to, type }) => {
  const base =
    "focus:bg inline-block rounded-full bg-yellow-400 font-semibold uppercase -tracking-widest text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + "text-xs px-4 py-2 md:px-5 md:py-2.5",
    secondary:
      "focus:bg inline-block px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 rounded-full border-2 border-stone-300 font-semibold uppercase -tracking-widest text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
