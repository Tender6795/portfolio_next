import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Button = ({
  text,
  className = "",
  style = {},
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-[148px] h-[36px] rounded-[40px] px-[12px] py-[8px] flex items-center justify-center gap-[12px] font-montserrat text-[12px] font-medium leading-[14.63px] text-center cursor-pointer transition-all duration-300 bg-[#03A473] hover:brightness-110 hover:scale-105 ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};
