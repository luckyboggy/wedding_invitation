import React from "react";
import cls from "./Locations.module.scss";

export default function Locations() {
  return (
    <div className={cls.locations}>
      <div className={cls.wrapper}>
        <h2>Локации</h2>
        <div className={cls.location}>
          <div className={cls.locationInfo}>
            <h3 className={cls.event}>Регистрация в ЗАГСе</h3>
            <p className={cls.time}>18.06.2025 11:30</p>
            <p className={cls.addres}>ул. Карла Либкнехта 3</p>
            <p className={cls.description}>Встречаемся там-то там-то...</p>
          </div>
          <div className={cls.locationMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac7c6b0d4f73dc65dc8205cc88fc7269e8066c52f4867a226132e1a283175f9f&amp;source=constructor"
              width="100%"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className={cls.location}>
          <div className={cls.locationInfo}>
            <h3 className={cls.event}>ЭКО парк CANADA</h3>
            <p className={cls.time}>18.06.2025 14:00</p>
            <p className={cls.addres}>Свердловская область, Нижнесергинский район</p>
            <p className={cls.description}>Приезжаем, празднуем,</p>
          </div>
          <div className={cls.locationMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A27093db96dff24e6fa6697c1c9e4875f191632710a6354abe03533931538bde7&amp;source=constructor"
              width="100%"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

       
      </div>
    </div>
  );
}
