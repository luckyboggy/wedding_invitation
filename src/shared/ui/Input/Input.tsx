import { FC, ReactNode } from "react";
import cls from "./Input.module.scss";

type TInputProps = {
  label: ReactNode | string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<TInputProps> = ({ label, name, value, onChange }) => {
  return (
    <div className={cls.textInput}>
      <span>{label}</span>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
