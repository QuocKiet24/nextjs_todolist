import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  text: string | ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ text, type, onClick, actionButton }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton && `bg-orange-700 rounded-full p-2 text-white`,
          `bg-orange-700 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
