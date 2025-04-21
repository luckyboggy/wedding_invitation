import { FC, useState } from "react";
import cls from "./SecondDay.module.scss";

import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

const SecondDay: FC = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={cls.secondDay}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>Второй день</p>
          <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} />
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          <p>
            Предлагаем в этот день по-настоящему отдохнуть - насладиться сном до
            обеда.
          </p>
          <p>
            Можете захватить с собой любимый кофе или йогрут и приготовить себе
            завтрак в номере.
          </p>
          <div className={cls.list}>
            <div className={cls.listTitle}>В номере есть:</div>
            <p>▸ холодильник</p>
            <p>▸ микроволновка</p>
            <p>▸ чайник</p>
            <p>▸ минимальный набор посуды</p>
            <p>▸ плитка электрическая</p>
          </div>
          <p>
            В целом день свободный, из запланированного - совместное
            приготовление плова, нарезка салата и фруктов.
          </p>
          <p>Вечером пьем пиво, поем песни, делимся вмечатлениями.</p>
          <p>
            По желанию - банные процедуры, сап-прогулки, купания и вечерные
            посиделки с песнями и гитарой.
          </p>
          <p>
            Если что, ближайший магазин в поселке Атиг - пятерочка. Ехать до
            магазина 10 минут.
          </p>
          <div className={cls.list}>
            <div className={cls.listTitle}>Советуем взять:</div>
            <p>▸ кофе на утро и перекус </p>
            <p>
              ▸ реппеленты от комаров (в номерах нельзя использовать спирали)
            </p>
            <p>▸ купальник</p>
            <p>▸ полотенце</p>
            <p>▸ сланцы</p>
            <p>▸ банные принадежности</p>
          </div>
          <p>Уезжаем в пятницу 20 числа до 12:00.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondDay;
