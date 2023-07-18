// import { ContactFilter } from '../../redux/contacts/filterSlices';
// import usePHBState from '../../redux/selectors';
// import { useDispatch } from 'react-redux';

export function Filter() {
  // const { filter } = usePHBState();
  // const dispatch = useDispatch();
  return (
    <div className='filter'>
      <label className='filter-label'>
        Find contact by name:
        <input
          type='text'
          // value={filter}
          // onChange={(e) => dispatch(ContactFilter(e.target.value))}
          name='filter'
          className='filter-input'
        />
      </label>
    </div>
  );
}
