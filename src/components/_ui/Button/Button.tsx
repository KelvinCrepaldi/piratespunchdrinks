import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="w-full bg-pirates-card-dark rounded p-3 mt-1 border-l hover:bg-slate-800 shadow-pirates-card"
      {...props}
    >
      {children}
    </button>
  );
};
