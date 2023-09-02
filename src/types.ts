export interface IuserMenu {
  userPhoto: string;
}
export interface ITrip {
  id: string;
  imageLink: string;
  imageDescription: string;
  cityName: string;
  dataIn: string;
  dataOut: string;
}
export interface ITripList {
  visibleTrips: ITrip[];
}

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
export interface ILogin {
  email: string;
  password: string;
}
export interface ModaLProps {
  onCloseModal(): void;
  children: JSX.Element[] | JSX.Element;
}
