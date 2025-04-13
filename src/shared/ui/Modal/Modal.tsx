import { FC } from "react";
import cls from "./Modal.module.scss";

const Modal: FC = () => {
  return (
    <div className={cls.modal}>
      <div className={cls.wrapper}></div>
    </div>
  );
};

export default Modal;
