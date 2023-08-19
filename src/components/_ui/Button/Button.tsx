import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="w-full  rounded p-3 mt-1 border-l hover:to-pirates-card-dark2 bg-gradient-to-r from-pirates-card-dark to-pirates-card-dark"
      {...props}
    >
      {children}
    </button>
  );
};
