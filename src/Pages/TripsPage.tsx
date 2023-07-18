import { ContactForm, TripList, Loader, Filter } from '../components';
import PagesSTL from './Pages.module.css';
// import usePHBState from '../redux/selectors';

// import { useGetContatsQuery } from '../redux/contacts/contactsApi';
import { ITrip } from '../types';

export function TripsPage() {
  const filter = '';
  const items: ITrip[] | [] = [];
  // const { filter } = usePHBState();

  // const { data: items = [], isLoading, error } = useGetContatsQuery();

  const getVisibleItems = (items: ITrip[]): ITrip[] | [] => {
    if (items) {
      return items.filter((item) =>
        item.cityName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      );
    }
    return [];
  };

  const visibleItems = getVisibleItems(items);
  return (
    <div className={PagesSTL.container}>
      <h2 className={PagesSTL.heading}>PhoneBook</h2>
      <ContactForm visibleContacts={visibleItems} />
      <h2 className={PagesSTL.heading}>Contacts</h2>
      <TripList visibleTrips={visibleItems} />
      {/* {items.length > 1 && <Filter />}
      {items.length > 0 && !error && !isLoading && <TripList visibleTrips={visibleContacts} />}
      {isLoading && <Loader />} */}
    </div>
  );
}
