import { useState } from "react";
import Carousel from "src/shared/ui/Carousel/Carousel";
import cls from "./DressCode.module.scss";

import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

export default function DressCode() {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={cls.dressCode}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>Дресс-код</p>
          <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} />
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          <div className={cls.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              earum labore totam quasi magnam ipsam mollitia esse, quia
              excepturi? Natus!
            </p>
          </div>
          <div className={cls.references}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}