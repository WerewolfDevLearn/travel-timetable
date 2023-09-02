import { useState } from 'react';
import { IDay } from 'types';
import Modal from 'components/Modal/Modal';

import Calendar from './Calendar/Calendar';
import InputDate from './Input';

import { DatepickerContext } from './DaypickerContext';
interface IProps {
  labelTex: string;
  forId: string;
}
export function DatePicker({ labelTex, forId }: IProps) {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<IDay>();
  const closeModal = () => {
    setShow(false);
  };

  const inputValue = selectedDate
    ? `${selectedDate?.year}-${selectedDate?.month}-${selectedDate?.day}`
    : 'Select a date';

  const onClickHandler = () => {
    setShow(true);
  };

  return (
    <>
      <DatepickerContext.Provider value={{ setDate: setSelectedDate, closeModal }}>
        <div className="datepicker-wrapper">
          <InputDate
            inputValue={inputValue}
            onClickHandler={onClickHandler}
            labelTex={labelTex}
            forId={forId}
          />

          {show && (
            <Modal onCloseModal={closeModal}>
              <Calendar />
            </Modal>
          )}
        </div>
      </DatepickerContext.Provider>
    </>
  );
}
