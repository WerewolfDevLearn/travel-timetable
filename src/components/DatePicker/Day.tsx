/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IDay } from '../../types';
import stl from './DatePicker.module.css';
interface IDayProps {
  day: IDay;
}
export default function Day({ day }: IDayProps) {
  const currentDay = day.currentDate ? stl.CurrentDay : stl.OtherDay;
  const currentMonth = day.currentMonth ? stl.CurrentMonth : stl.OtherMonth;
  return (
    <>
      <li className={stl.DayNumber}>
        <div className={currentMonth}>
          <span className={currentDay}>{day.day}</span>
        </div>
      </li>
    </>
  );
}
