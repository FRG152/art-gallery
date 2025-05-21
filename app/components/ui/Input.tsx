import { ChangeEvent } from "react";

interface Props {
  name: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  func: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, label, value, placeholder, func }: Props) => {
  return (
    <div className="flex flex-col w-[400px] mx-auto">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={func}
        className="h-[50px] rounded-lg border-2 border-secondary px-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
