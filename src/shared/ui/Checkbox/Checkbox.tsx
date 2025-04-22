import { FC } from "react";
import cls from "./Checkbox.module.scss";

type TCheckboxProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | (() => void);
  error?: string;
  withError?: boolean;
};

const Checkbox: FC<TCheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  error,
  withError = false,
}) => {
  return (
    <div className={cls.checkbox}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <input
          type="checkbox"
          id={label}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={label}>{label}</label>
      </div>
      {withError && <div className={cls.error}>{error || "\u00A0"}</div>}
    </div>
  );
};

export default Checkbox;
