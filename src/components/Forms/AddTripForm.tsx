export function AddTripForm() {
  return (
    <form id='AddTripForm' className='add-trip-form'>
      <h2 className='add-trip-form-heading'>Create trip</h2>
      <label htmlFor='city' className='add-trip-form-lable'>
        City
      </label>
      <select name='city' className='add-trip-select'>
        <option value=''>Pleace select a city</option>
        <option value='Kyiv'>Kyiv</option>
        <option value='London'>London</option>
        <option value='New York'>New York</option>
      </select>

      <label htmlFor='startDate'>
        Start date
        <div className='input-decor-container'>
          <input
            className='date-input'
            type='text'
            id='start'
            name='startDate'
            placeholder='Select a date'
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
          />
        </div>
      </label>
      <label htmlFor='endDate'>
        End date
        <input
          className='date-input'
          type='text'
          id='end'
          name='endDate'
          placeholder='Select a date'
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
        />
      </label>
      <button>Cancel</button>
      <button type='submit'>Save</button>
    </form>
  );
}
