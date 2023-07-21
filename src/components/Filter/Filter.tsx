// import { ContactFilter } from '../../redux/contacts/filterSlices';
// import usePHBState from '../../redux/selectors';
// import { useDispatch } from 'react-redux';

import { useState } from 'react';

export function Filter() {
  const [filter, setFilte] = useState('');

  return (
    <div className='filter'>
      <div className='filter-decor'>
        <input
          type='text'
          value={filter}
          onChange={(e) => setFilte(e.target.value)}
          name='filter'
          className='filter-input'
          placeholder='Search your trip'
        />
      </div>
    </div>
  );
}
