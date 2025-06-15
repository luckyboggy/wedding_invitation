import { FC, useState } from "react";
import cls from "./Cars.module.scss";

import CarItem from "src/shared/ui/CarItem/CarItem";

import cars from "shared/assets/images/cars/cars.jpg";

import car1 from "shared/assets/images/cars/car_1.jpg";
import car2 from "shared/assets/images/cars/car_2.jpg";
import car3 from "shared/assets/images/cars/car_3.jpg";
import car4 from "shared/assets/images/cars/car_4.jpg";
import car5 from "shared/assets/images/cars/car_5.jpg";
import car6 from "shared/assets/images/cars/car_6.jpg";
import car7 from "shared/assets/images/cars/car_7.jpg";
import car8 from "shared/assets/images/cars/car_8.jpg";
import car9 from "shared/assets/images/cars/car_9.jpg";
import car10 from "shared/assets/images/cars/car_10.jpg";

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
          <p>Рассадка по машинам</p>
          {/* <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} /> */}
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
