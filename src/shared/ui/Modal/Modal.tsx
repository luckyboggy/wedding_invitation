import { FC, useEffect, ReactNode } from "react";
import cls from "./Modal.module.scss";

import CloseIcon from "shared/assets/images/svg/close.svg?react";

type TModalProps = {
  onClose: (b: boolean) => void;
  children: ReactNode;
};

const Modal: FC<TModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose(false);
  };

  return (
    <div className={cls.modal} onClick={handleClose}>
      <div className={cls.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={cls.heading}>
          <div className={cls.title}></div>
          <div className={cls.close} onClick={handleClose}>
            <CloseIcon className={cls.icon} />
          </div>
        </div>
        <div className={cls.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
