import { NextPage } from "next";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

const ButtonLight: NextPage<Props> = ({ title, icon, ...props }) => {
  return (
    <button
      {...props}
      className={`px-3 py-2.5 text-sm text-dark bg-white flex items-center gap-x-3`}
    >
      {title}
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
};

export default ButtonLight;
