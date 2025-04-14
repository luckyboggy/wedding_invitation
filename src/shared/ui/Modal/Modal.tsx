import { FC, useEffect } from "react";
import cls from "./Modal.module.scss";

type TModalProps = {
  onClose: (b: boolean) => void;
};

const Modal: FC<TModalProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={cls.modal}
      onClick={(e) => {
        e.preventDefault();
        onClose(false);
      }}
    >
      <div className={cls.wrapper} onClick={(e) => e.stopPropagation()}>

        <div className={cls.heading}>
          <div className={cls.title}></div>
          <div className={cls.close}></div>
        </div>
        <div className={cls.content}></div>
      </div>
    </div>
  );
};

export default Modal;
