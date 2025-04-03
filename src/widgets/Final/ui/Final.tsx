import { FC } from "react";
import cls from "./Final.module.scss";

const Final: FC = () => {
  return (
    <div className={cls.final}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <p>Мы Вас Ждём!</p>
        </div>
      </div>
    </div>
  );
};

export default Final;
