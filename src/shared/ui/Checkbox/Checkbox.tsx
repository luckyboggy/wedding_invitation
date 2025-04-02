import { FC } from "react";
import cls from "./Checkbox.module.scss";

type TCheckboxProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<TCheckboxProps> = ({ label, name, checked, onChange }) => {
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
    </div>
  );
};

export default Checkbox;
