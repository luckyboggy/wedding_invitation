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
          <p>Мы приглашаем вас разделить с нами....</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum labore totam quasi magnam ipsam mollitia esse, quia excepturi?
            Natus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greating;
