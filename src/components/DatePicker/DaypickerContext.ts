import { createContext, useContext } from 'react';
import { IDay } from 'types';

type contextObject = {
  setDate: (day: IDay) => void;
  closeModal: () => void;
};

export const DatepickerContext = createContext<contextObject | undefined>(undefined);

export function useDatepickerContext() {
  const contextObjec = useContext(DatepickerContext);
  if (contextObjec === undefined) {
    throw new Error('setDate is missing form context');
  }
  return contextObjec;
}
