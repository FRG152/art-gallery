import React from "react";

interface Props {
  text: string;
  type: "button" | "submit";
  primary?: boolean;
  styles?: string;
  func?: () => void;
}

const Button = ({ text, type, func, primary, styles }: Props) => {
  const buttonStyle = primary
    ? "bg-secondary text-primary"
    : "border-2 border-secondary";

  return (
    <button
      type={type}
      onClick={func}
      className={`${buttonStyle} ${styles} w-full h-[50px]`}
    >
      {text}
    </button>
  );
};

export default Button;
