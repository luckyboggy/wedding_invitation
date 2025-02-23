import React from "react";
import cls from "./Greating.module.scss";

export default function Greating() {
  return (
    <div className={cls.greating}>
      <div className={cls.wrapper}>
        <div className={cls.mainGreating}>
          
          <h1>Дорогие друзья и родные</h1>
        </div>
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
}
