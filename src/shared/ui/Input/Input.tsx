import { FC, ReactNode } from "react";
import cls from "./Input.module.scss";

type TInputProps = {
  label: ReactNode | string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input: FC<TInputProps> = ({ label, name, value, onChange, error }) => {
  return (
    <div className={cls.textInput}>
      <span>{label}</span>
      <input type="text" name={name} value={value} onChange={onChange} />
      <div className={cls.error}>{error || "\u00A0"}</div> {/* \u00A0 = неразрывный пробел */}
    </div>
  );
};

export default Input;