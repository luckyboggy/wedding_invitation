import { FC, useState } from "react";
import cls from "./Cars.module.scss";

import CarItem from "src/shared/ui/CarItem/CarItem";

import cars from "shared/assets/images/cars/cars.jpg";

import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

const Cars: FC = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={cls.cars}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>По машинам</p>
          <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} />
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          {/* <div className={cls.carsList}>
            <CarItem number="1" image={car1} driver="Богдан" pass={["Оля"]} />
          </div> */}
          <img src={cars} alt="cars" />
        </div>
      </div>
    </div>
  );
};

export default Cars;
