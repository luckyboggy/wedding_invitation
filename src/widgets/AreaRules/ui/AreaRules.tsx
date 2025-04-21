import { FC, useState } from "react";
import cls from "./AreaRules.module.scss";

import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

const AreaRules: FC = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={cls.areaRules}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>Правила площадки</p>
          <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} />
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          <div className={cls.contentTitle}>
            Правила проживания в ЭКО парке CANADA
          </div>
          <div className={cls.rulesList}>
            <p>▸ Не курить внутри номеров/сафари тентов и на лоджии</p>
            <p>▸ Необходимо помыть посуду перед отъездом</p>
            <p>▸ Уличные гамаки ограничены по весу (до 90 кг)</p>
            <p>▸ Нельзя выносить из домов мебель/пледы с кроватей/посуду</p>
            <p>▸ Соблюдать правила противопожарного режима</p>
            <p>▸ Нельзя салюты и феерверки</p>
            <p>
              ▸ На территории необходимо передвигаться в ластах с фламинго на
              руках. При себе иметь спасательный круг.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaRules;
