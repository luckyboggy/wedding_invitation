import { FC, useState } from "react";
import cls from "./CarItem.module.scss";

type TCarItemProps = {
  number: string;
  image: string;
  driver: string;
  pass: string[];
  guestPass?: string[];
};

const CarItem: FC<TCarItemProps> = ({
  number,
  image,
  driver,
  pass,
  guestPass,
}) => {
  return (
    <div className={cls.carItem}>
      <div className={cls.number}>{number}</div>
      <div className={cls.image}>
        <img src={image} alt="" />
      </div>
      <div className={cls.people}>
        <div className={cls.driver}>{driver}</div>
        <div className={cls.pass}>
          {pass.map((p) => (
            <div className={cls.passItem}>{p}</div>
          ))}
        </div>
        <div className={cls.guestsPass}></div>
      </div>
    </div>
  );
};

export default CarItem;
