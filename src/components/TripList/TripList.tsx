import { ITripList } from '../../types';
import TripListItem from './TripListItem';
export function TripList({ visibleTrips }: ITripList) {
  return (
    <ul>
      {visibleTrips.map((visibleTrip) => (
        <TripListItem trip={visibleTrip} key={visibleTrip.id} />
      ))}
    </ul>
  );
}
