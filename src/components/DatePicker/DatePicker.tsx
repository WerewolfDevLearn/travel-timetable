/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import stl from './DatePicker.module.css';
import { weekDaysShort } from './weeks';
import { months } from './mounthes';
import { arrFill } from './arrFill';
import { useState } from 'react';
import Day from './Day';
export function DatePicker() {
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const [month, setMonth] = useState(currMonth + 1);
  const [year, setYear] = useState(currYear);
  const [show, setShow] = useState(false);

  const CurrMonthDaysNumbe = arrFill(year, month);

  const onClickHandler = () => {
    setShow((show) => !show);
  };
  const onPrev = () => {
    setMonth((month) => month - 1);
    if (month <= 1) {
      setYear((year) => year - 1);
      setMonth(12);
    }
  };
  const onNext = () => {
    setMonth((month) => month + 1);
    if (month >= 12) {
      setYear((year) => year + 1);
      setMonth(1);
    }
  };

  return (
    <>
      <div className={stl.Wrapper}>
        <label className={stl.InputLabel} htmlFor='start-date'>
          Start date
        </label>
        <div className={stl.InputWraper}>
          <input
            className={stl.InputDate}
            type='text'
            placeholder='Select a Date'
            onClick={onClickHandler}
            name='start-date'
          />
        </div>
        {show && (
          <div className={stl.CalendarWrapper}>
            <div className={stl.CalendarHeader}>
              <button onClick={onPrev}>Prev</button>
              <p>
                {months[month - 1]}/{year}
              </p>

              <button onClick={onNext}>Next</button>
            </div>
            <ul className={stl.WeeksDays}>
              {weekDaysShort.map((weekDay) => (
                <li key={weekDay} className={stl.WeeksDay}>
                  {weekDay}
                </li>
              ))}
            </ul>
            <ul className={stl.MonthDate} onClick={onClickHandler}>
              {CurrMonthDaysNumbe.map((day) => (
                <Day day={day} key={day.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
