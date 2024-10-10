import { useEffect, useRef, useState } from "react";
import icons from "../../assets/iconss.svg";
import { generateCalendar, isSameDate } from "../../helpers/calendar";
import css from "./Calendar.module.css";
import clsx from "clsx";
import { daysOfWeek, months } from "../../constants";

const Calendar = ({ date: currentDate, handleSetDate, onClose }) => {
  const date = currentDate || new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const calendarRef = useRef(null);

  useEffect(() => {
    calendarRef.current.scrollIntoView({ behavior: "smooth" });
    window.addEventListener("click", onClose);
    return () => window.removeEventListener("click", onClose);
  }, [onClose]);

  const handlePrev = () => {
    setSelectedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  };

  const handleNext = () => {
    setSelectedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  };

  const setDate = (date) => {
    handleSetDate(date);
    onClose();
  };

  const currentMonth = months[selectedDate.getMonth()];
  const currentYear = selectedDate.getFullYear();
  const days = generateCalendar(selectedDate.getMonth() + 1, currentYear);
  return (
    <div
      className={css.container}
      onClick={(e) => e.stopPropagation()}
      ref={calendarRef}
    >
      <div className={css.header}>
        <button
          onClick={handlePrev}
          className={css.button}
          type="button"
          aria-label="previous month"
        >
          <svg className={clsx(css.icon, css.prev)} width={24} height={24}>
            <use xlinkHref={icons + "#icon-arrow"}></use>
          </svg>
        </button>
        <p className={css.monthYear}>{currentMonth + " " + currentYear}</p>
        <button
          onClick={handleNext}
          className={css.button}
          type="button"
          aria-label="previous month"
        >
          <svg className={clsx(css.icon, css.next)} width={24} height={24}>
            <use xlinkHref={icons + "#icon-arrow"}></use>
          </svg>
        </button>
      </div>
      <ul className={css.weekList}>
        {daysOfWeek.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      <ul className={css.dayList}>
        {days.map((day, index) => (
          <li key={index}>
            <button
              className={clsx({
                [css.selected]: isSameDate(date, day),
                [css.notThisMonth]: selectedDate.getMonth() !== day.getMonth(),
              })}
              type="button"
              onClick={() => setDate(day)}
            >
              {day.getDate()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;