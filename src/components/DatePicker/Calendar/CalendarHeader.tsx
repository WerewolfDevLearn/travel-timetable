import { weekDaysShort } from '../weeks';
import { months } from '../mounthes';

interface IProps {
  year: number;
  month: number;
  Prev: () => void;
  Next: () => void;
}

export default function CalendarHeader({ year, month, Prev, Next }: IProps) {
  return (
    <>
      <div className='calendar-header'>
        <button onClick={Prev}>Prev</button>
        <p>
          {months[month - 1]}/{year}
        </p>
        <button onClick={Next}>Next</button>
      </div>
      <ul className='weeks-day'>
        {weekDaysShort.map((weekDay) => (
          <li key={weekDay} className='week-day'>
            {weekDay}
          </li>
        ))}
      </ul>
    </>
  );
}
