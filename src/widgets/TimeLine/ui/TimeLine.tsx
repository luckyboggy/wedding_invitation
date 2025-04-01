import { useState } from "react";
import cls from "./TimeLine.module.scss";
import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

export default function TimeLine() {
  type TScheduleItem = {
    time: string;
    event: string;
    description?: string;
    status?: string;
  };

  const schedule: TScheduleItem[] = [
    {
      time: "11:00",
      event: "сбор в ЗАГСе",
      description: "ул. Карла-Либнихта, 3",
    },
    { time: "11:30", event: "церемония бракосочетания", status: "main" },
    { time: "12:00", event: "отъезд" },
    {
      time: "14:00",
      event: "прибытие на площадку",
      description: "эко-парк Canada",
    },
    { time: "15:00", event: "welcome", status: "main" },
    { time: "16:00", event: "церемония", status: "main" },
    { time: "17:00", event: "фотосессия" },
    { time: "18:00", event: "банкет", status: "main" },
    { time: "20:00", event: "что-то ещё" },
    { time: "22:00", event: "дискотека" },
    { time: "23:00", event: "завершение", status: "main" },
  ];

  const [showAll, setShowAll] = useState(false);

  const filteredSchedule = showAll
    ? schedule
    : schedule.filter((item) => item.status === "main");

  return (
    <div className={cls.timeLine}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <p>Программа дня</p>
        </div>
        <div className={cls.schedule}>
          {filteredSchedule.map((item) => (
            <div className={cls.scheduleItem} key={item.time}>
              <div className={cls.time}>
                <p>{item.time}</p>
              </div>
              <div className={cls.info}>
                <div className={cls.event}>
                  <p>{item.event}</p>
                </div>
                {item.description && (
                  <div className={cls.description}>{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={cls.btn} onClick={() => setShowAll(!showAll)}>
          <div className={cls.detailBtn}>{showAll ? "Скрыть" : "Подробно"}</div>
          <ArrowIcon className={`${cls.arrow} ${showAll ? cls.rotate : ""}`} />
        </div>
      </div>
    </div>
  );
}
