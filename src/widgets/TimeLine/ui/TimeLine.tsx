import { FC, useState } from "react";
import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";
import cls from "./TimeLine.module.scss";

type TScheduleItem = {
  time: string;
  event: string;
  description?: string;
  status?: string;
};

const schedule: TScheduleItem[] = [
  {
    time: "11:00",
    event: "ЗАГС",
    //description: "ул. Карла-Либнихта, 3",
    description: "сбор гостей и фуршет",
  },
  {
    time: "11:30",
    event: "ЦЕРЕМОНИЯ",
    description: "берем гортензии и платочки",
    status: "main",
  },
  { time: "12:00", event: "ВЫЕЗД", description: "выезжаем в Канаду парк" },
  {
    time: "14:00",
    event: "РАССЕЛЕНИЕ",
    //description: "эко-парк Canada",
    description: "располагаемся в домиках, отдыхаем",
  },
  {
    time: "14:00",
    event: "WELCOME",
    status: "main",
    description: "фуршет, фото, разговорчики",
  },
  {
    time: "15:45",
    event: "ВЫЕЗДНАЯ ЦЕРЕМОНИЯ",
    status: "main",
    description: "берем только платочки",
  },
  {
    time: "16:15",
    event: "ФОТОСЕССИЯ",
    description: "делаем шикарное общее фото",
  },
  {
    time: "17:00",
    event: "БАНКЕТ",
    status: "main",
    description: "угощаемся вкусностями",
  },
  {
    time: "21:00",
    event: "ТОРТ",
    description: "наслаждаемся чаем",
  },
  {
    time: "22:00",
    event: "ДИСКОТЕКА",
    description: "танцуем до упаду",
  },
  {
    time: "23:00",
    event: "ЗАВЕРШЕНИЕ ВЕЧЕРА",
    description: "делаем что то красивое и приятное",
    status: "main",
  },
  {
    time: "23:30",
    event: "АВТЕПАТИ",
    description: "вечеринка после вечеринки, для самый стойких",
  },
];

const TimeLine: FC = () => {
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
              <div className={cls.eventData}>
                <div className={cls.time}>
                  <p>{item.time}</p>
                </div>
                <div className={cls.event}>
                  <p>{item.event}</p>
                </div>
              </div>
              {showAll && (
                <div className={cls.eventAddData}>
                  <div className={cls.timeInfo}></div>
                  <div className={cls.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              )}
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
};

export default TimeLine;
