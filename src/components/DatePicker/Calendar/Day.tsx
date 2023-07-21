import { IDayProps } from '../../../types';
import { useState } from 'react';
import { useDatepickerContext } from '../DaypickerContext';
import { IDay } from '../../../types';

export default function Day({ day }: IDayProps) {
  const [storage, _] = useState<IDay>(day);
  const setDate = useDatepickerContext();
  const currentDay = day.currentDate ? 'current-day' : 'other-day';
  const currentMonth = day.currentMonth ? 'current-month' : 'other-month';
  return (
    <>
      <li className='day-number'>
        <button className={` ${currentMonth} ${currentDay}`} onClick={() => setDate(storage)}>
          {day.day}
        </button>
      </li>
    </>
  );
}
