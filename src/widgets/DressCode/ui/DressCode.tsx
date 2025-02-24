import React from "react";
import cls from "./DressCode.module.scss";

export default function DressCode() {
  return (
    <div className={cls.dressCode}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <h2>Дресс-код</h2>
        </div>
        <div className={cls.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum labore totam quasi magnam ipsam mollitia esse, quia excepturi?
            Natus!
          </p>
        </div>
        <div className={cls.references}>
          <div className={cls.images}>
            <img className={cls.img} src="" alt="Image 1" />
            <img className={cls.img} src="" alt="Image 1" />
            <img className={cls.img} src="" alt="Image 1" />
            <img className={cls.img} src="" alt="Image 1" />
            <img className={cls.img} src="" alt="Image 1" />
            <img className={cls.img} src="" alt="Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
