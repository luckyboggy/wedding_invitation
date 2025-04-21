import { FC } from "react";
import DividingLine from "shared/ui/DividingLine/DividingLine";
import cls from "./Greating.module.scss";

const Greating: FC = () => {
  return (
    <div className={cls.greating}>
      <div className={cls.wrapper}>
        <div className={cls.mainGreating}>
          <p>Дорогие гости</p>
        </div>
        <DividingLine />
        <div className={cls.greatingText}>
          <p>Мы приглашаем вас разделить с нами особенный день.</p>
          <p>
            С нетерпением ждем возможности отпраздновать это событие в
            кругу самых близких и дорогих нам людей.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greating;
