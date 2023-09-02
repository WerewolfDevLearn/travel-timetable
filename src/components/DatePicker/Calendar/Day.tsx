import { IDayProps, IDay } from 'types';
import { useState } from 'react';

import { useDatepickerContext } from '../DaypickerContext';

export default function Day({ day }: IDayProps) {
  const [storage, _] = useState<IDay>(day);
  const { setDate, closeModal } = useDatepickerContext();
  const currentDay = day.currentDate ? 'current-day' : 'other-day';
  const currentMonth = day.currentMonth ? 'current-month' : 'other-month';
  return (
    <>
      <li className="day-number">
        <button
          className={` ${currentMonth} ${currentDay}`}
          onClick={() => {
            setDate(storage);
            closeModal();
          }}
        >
          {day.day}
        </button>
      </li>
    </>
  );
}
