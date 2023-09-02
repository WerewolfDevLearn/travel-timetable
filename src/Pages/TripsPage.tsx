import { useState } from 'react';
import AddTripForm from 'components/Forms/AddTripForm';
import Modal from 'components/Modal/Modal';
import { TripList } from 'components/TripList/TripList';
import { Filter } from 'components/Filter/Filter';
import { WeatherWidget } from 'components/WeatherWidget/WeatherWidget';

// import usePHBState from '../redux/selectors';

// import { useGetContatsQuery } from '../redux/contacts/contactsApi';

import { ITrip } from '../types';

export default function TripsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const filter = '';
  const items: ITrip[] | [] = [];
  // const { filter } = usePHBState();

  // const { data: items = [], isLoading, error } = useGetContatsQuery();

  const getVisibleItems = (items: ITrip[]): ITrip[] | [] => {
    if (items) {
      return items.filter((item) =>
        item.cityName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return [];
  };

  const visibleItems = getVisibleItems(items);
  return (
    <div className="gird-container">
      <div className="trip-section-wrapper">
        <h1 className="trip-section-heading">
          Weather <span className="heading-decor">Forecast</span>
        </h1>
        <Filter />
        <TripList visibleTrips={visibleItems} />
      </div>
      <div className="tipAdd-container">
        <button type="button" className="tipAdd-button" onClick={onOpen}>
          Add trip
        </button>
      </div>
      <div className="weather-widget">
        <WeatherWidget />
      </div>
      {open && (
        <Modal onCloseModal={onClose}>
          <AddTripForm onClose={onClose} />
        </Modal>
      )}

      {/* {items.length > 0 && !error && !isLoading && <TripList visibleTrips={visibleContacts} />} */}
      {/* {isLoading && <Loader />} */}
    </div>
  );
}
