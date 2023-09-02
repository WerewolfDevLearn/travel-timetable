import Day from './Day';
import { arrFill } from './arrFill';

interface IProps {
  year: number;
  month: number;
}
export default function CalendarBody({ year, month }: IProps) {
  const CurrMonthDaysNumbe = arrFill(year, month);
  return (
    <ul className="month-dates">
      {CurrMonthDaysNumbe.map((day) => (
        <Day day={day} key={day.id} />
      ))}
    </ul>
  );
}
