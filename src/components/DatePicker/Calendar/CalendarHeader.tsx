import { weekDaysShort } from '../weeks';
import { months } from '../monthes';

interface IProps {
  year: number;
  month: number;
  Prev: () => void;
  Next: () => void;
}

export default function CalendarHeader({ year, month, Prev, Next }: IProps) {
  return (
    <>
      <div className="calendar-header">
        <button onClick={Prev} type="button">
          Prev
        </button>
        <p>
          {months[month - 1]}/{year}
        </p>
        <button onClick={Next} type="button">
          Next
        </button>
      </div>
      <ul className="weeks-day">
        {weekDaysShort.map((weekDay) => (
          <li key={weekDay} className="week-day">
            {weekDay}
          </li>
        ))}
      </ul>
    </>
  );
}
