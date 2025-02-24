import React from "react";
import cls from "./TimeLine.module.scss";

export default function TimeLine() {
  type TScheduleItem = { time: string; event: string; description?: string };

  const schedule: TScheduleItem[] = [
    {
      time: "11:00",
      event: "сбор в ЗАГСа",
      description: "ул. Карла-Либнихта, 3",
    },
    { time: "11:30", event: "церемония бракосочетания" },
    { time: "12:00", event: "отъезд" },
    {
      time: "14:00",
      event: "прибытие на площадку",
      description: "эко-парк Canada",
    },
    { time: "15:00", event: "welcome" },
    { time: "16:00", event: "церемония" },
    { time: "17:00", event: "фотосессия" },
    { time: "18:00", event: "банкет" },
    { time: "20:00", event: "что-то ещё" },
    { time: "22:00", event: "дискотека" },
  ];

  return (
    <div className={cls.timeLine}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <h2>Программа дня</h2>
        </div>
        <div className={cls.schedule}>
          {schedule.map((item) => (
            <div className={cls.scheduleItem}>
              <div className={cls.time}>
                <h2>{item.time}</h2>
              </div>
              <div className={cls.info}>
                <div className={cls.event}>
                  <h2>{item.event}</h2>
                </div>
                {item.description && (
                  <div className={cls.description}>{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
