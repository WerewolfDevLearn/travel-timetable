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
