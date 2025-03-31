import { FC } from "react";
import cls from "./Calendar.module.scss";

type TCalendarProps = {
  year: number;
  month: number;
  holidays: number[];
  highlightedDays: number[];
  occupiedDays: number[];
};

const Calendar: FC<TCalendarProps> = ({
  year,
  month,
  holidays,
  highlightedDays,
  occupiedDays,
}) => {
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array(firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1).fill(
    null
  );

  const addToCalendar = (day: number) => {
    const eventTitle = "Свадьба Оли и Богдана!";
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${year}${month.toString().padStart(2, "0")}${day
      .toString()
      .padStart(2, "0")}T000000Z/${year}${month
      .toString()
      .padStart(2, "0")}${day.toString().padStart(2, "0")}T235900Z`;
    window.open(googleCalendarUrl, "_blank");
  };

  const getDayOfWeek = (year: number, month: number, day: number): number => {
    return new Date(year, month - 1, day).getDay();
  };

  return (
    <div className={cls.calendar}>
      <h2 className={cls.title}>
        {monthNames[month - 1]} {year}
      </h2>
      <div className={cls.weekdays}>
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
          <div key={day} className={cls.weekday}>
            {day}
          </div>
        ))}
        {emptyDays.map((_, i) => (
          <div key={i} className={cls.emptyDay}></div>
        ))}
        {days.map((day) => {
          const dayOfWeek = getDayOfWeek(year, month, day);
          const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

          return (
            <div
              key={day}
              className={`${cls.day} ${
                highlightedDays.includes(day) ? cls.highlighted : cls.normal
              } ${isWeekend ? cls.weekend : ""} ${
                holidays.includes(day) ? cls.holidays : ""
              } ${occupiedDays.includes(day) ? cls.occupiedDays : ""}
               
              `}
              onClick={() =>
                highlightedDays.includes(day) && addToCalendar(day)
              }
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
