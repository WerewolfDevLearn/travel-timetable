import { useState } from 'react';
type returnedTypeDay = [() => void, () => void, number, number, number];

export function useDayHendler(currentDate: string): returnedTypeDay {
  const currDateParse = currentDate.split('-').map((element) => Number(element));
  const [yearD, setYearD] = useState<number>(currDateParse[0]);
  const [monthD, setMonthD] = useState<number>(currDateParse[1] + 1);
  const [dayD, setDayD] = useState<number>(currDateParse[1]);

  const onPrevDay = () => {
    setDayD((dayD) => dayD - 1);
    if (dayD <= 1) {
      setDayD(new Date(yearD, monthD - 1, 0).getDate());
      setMonthD((monthD) => monthD - 1);
    }
    if (monthD <= 1 && dayD <= 1) {
      setYearD((yearD) => yearD - 1);
      setMonthD(12);
    }
  };
  const onNextDay = () => {
    setDayD((dayD) => dayD + 1);
    if (dayD >= new Date(yearD, monthD, 0).getDate()) {
      setDayD(1);
      setMonthD((month) => month + 1);
    }
    if (monthD >= 12 && dayD >= 31) {
      setYearD((yearD) => yearD + 1);
      setMonthD(1);
    }
  };
  return [onPrevDay, onNextDay, dayD, monthD, yearD];
}
