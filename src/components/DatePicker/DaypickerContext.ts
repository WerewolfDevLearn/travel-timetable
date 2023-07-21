import { createContext, useContext } from 'react';

import { IDay } from '../../types';
type setDate = (day: IDay) => void;

export const DatepickerContext = createContext<setDate | undefined>(undefined);

export function useDatepickerContext() {
  const setDate = useContext(DatepickerContext);
  if (setDate === undefined) {
    throw new Error('setDate is missing form context');
  }
  return setDate;
}
