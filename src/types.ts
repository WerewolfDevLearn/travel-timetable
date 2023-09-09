export interface IuserMenu {
  userPhoto: string;
}
export interface ITrip {
  id: string;
  imageLink: string;
  imageDescription: string;
  cityName: string;
  dateIn: string;
  dateOut: string;
}
export interface ITripList {
  visibleTrips: ITrip[];
}
export type ITripReq = Pick<ITrip, 'cityName' | 'dateIn' | 'dateOut'>;

export interface ITripProps {
  trip: ITrip;
}

export interface IDay {
  year: number;
  month: number;
  day: number;
  currentDate: boolean;
  currentMonth: boolean;
  id: string;
}
export interface IDayProps {
  day: IDay;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}
export type ILogin = Pick<IRegister, 'email' | 'password'>;

export interface IUser {
  name: string;
  email: string;
  token: string;
}

export interface ModaLProps {
  onCloseModal(): void;
  children: JSX.Element[] | JSX.Element;
}
