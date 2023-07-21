import { IDay } from '../../types';
import { useState } from 'react';
import Calendar from './Calendar/Calendar';
import InputDate from './Input';
import { DatepickerContext } from './DaypickerContext';
interface IProps {
  labelTex: string;
}
export function DatePicker({ labelTex }: IProps) {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<IDay>();

  const inputValue = selectedDate
    ? `${selectedDate?.year}-${selectedDate?.month}-${selectedDate?.day}`
    : 'Select a date';

  const onClickHandler = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <DatepickerContext.Provider value={setSelectedDate}>
        <div className='datepicker-wrapper'>
          <InputDate inputValue={inputValue} onClickHandler={onClickHandler} labelTex={labelTex} />
          {show && <Calendar />}
        </div>
      </DatepickerContext.Provider>
    </>
  );
}
