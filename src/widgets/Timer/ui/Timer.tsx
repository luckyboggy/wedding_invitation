import { useState, useEffect, FC } from "react";
import Calendar from "src/shared/ui/Calendar/Calendar";
import DividingLine from "src/shared/ui/DividingLine/DividingLine";
import cls from "./Timer.module.scss";

const Timer: FC = () => {
  const targetDate = new Date("2025-06-18T11:30:00").getTime();
  const [remainingTime, setRemainingTime] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setRemainingTime(difference > 0 ? difference : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400)
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((totalSeconds % 86400) / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return { days, hours, minutes, seconds };
  };

  return (
    <div className={cls.timer}>
      <div className={cls.wrapper}>
        <Calendar
          year={2025}
          month={6}
          holidays={[12, 13]}
          highlightedDays={[18]}
          occupiedDays={[19, 20]}
        />
        <DividingLine />
        <div className={cls.title}>
          <p>До регистрации осталось</p>
        </div>

        <div className={cls.timerWrapper}>
          <div className={cls.timeItem}>
            <p className={cls.timeItemNumber}>
              {formatTime(remainingTime).days}
            </p>
            <p>дней</p>
          </div>
          :
          <div className={cls.timeItem}>
            <p className={cls.timeItemNumber}>
              {formatTime(remainingTime).hours}
            </p>
            <p>часов</p>
          </div>
          :
          <div className={cls.timeItem}>
            <p className={cls.timeItemNumber}>
              {formatTime(remainingTime).minutes}
            </p>
            <p>минут</p>
          </div>
          {/* :
          <div className={cls.timeItem}>
            <h1 className={cls.timeItemNumber}>{formatTime(remainingTime).seconds}</h1>
            <p>секунд</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Timer;
