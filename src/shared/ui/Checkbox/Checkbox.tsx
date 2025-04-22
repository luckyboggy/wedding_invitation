import { FC } from "react";
import cls from "./Checkbox.module.scss";

type TCheckboxProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | (() => void);
  error?: string;
};

const Checkbox: FC<TCheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  error,
}) => {
  return (
    <div className={cls.checkbox}>
      <input
        type="checkbox"
        id={label}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label}>{label}</label>
      {error && <div className={cls.error}>{error}</div>}
    </div>
  );
};

export default Checkbox;
