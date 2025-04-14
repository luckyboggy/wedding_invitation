import { FC } from "react";
import cls from "./AcceptData.module.scss";

import OkIcon from "shared/assets/images/svg/ok.svg?react";

const AcceptData: FC = () => {
  return (
    <div className={cls.acceptData}>
      <div className={cls.wrapper}>
        <OkIcon className={cls.ok} />
        <p className={cls.thanks}>Спасибо!</p>
        <p>Ваши данные получены</p>
      </div>
    </div>
  );
};

export default AcceptData;
