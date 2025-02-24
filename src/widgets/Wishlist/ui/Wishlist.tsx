import React from "react";
import cls from "./Wishlist.module.scss";

export default function Wishlist() {
  return (
    <div className={cls.wishlist}>
      <div className={cls.wrapper}>
        <h2>Вишлист</h2>
      </div>
    </div>
  );
}
