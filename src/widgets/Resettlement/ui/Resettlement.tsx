import { FC, useState } from "react";
import cls from "./Resettlement.module.scss";

import resett from "shared/assets/images/resett.jpg";

const Resettlement: FC = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className={cls.resettlement}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>Расселение</p>
          {/* <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} /> */}
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          {/* <div className={cls.carsList}>
            <CarItem number="1" image={car1} driver="Богдан" pass={["Оля"]} />
          </div> */}
          <img src={resett} alt="resett" />
        </div>
      </div>
    </div>
  );
};

export default Resettlement;
