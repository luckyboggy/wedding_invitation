import React from "react";
import cls from "./MainPage.module.scss";
import Greating from "../../widgets/Greetings/ui/Greating";
import Timer from "../../widgets/Timer/ui/Timer";
import DressCode from "../../widgets/DressCode/ui/DressCode";

export default function MainPage() {
  return (
    <div className={cls.main}>
      <div className={cls.container}>
        <Greating />
        <Timer />
        <DressCode />
      </div>
    </div>
  );
}
