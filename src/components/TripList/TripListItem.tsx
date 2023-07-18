import { ITripProps } from '../../types';

export default function TripListItem({ trip }: ITripProps) {
  return (
    <li>
      <img src={trip.imageLink} alt={trip.imageDescription} />
      <h3>{trip.cityName}</h3>
      <p>{`${trip.dataIn}-${trip.dataOut}`}</p>
    </li>
  );
}
