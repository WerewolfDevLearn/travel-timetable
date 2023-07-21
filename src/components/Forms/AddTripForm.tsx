import { DatePicker } from '../DatePicker/DatePicker';
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

      <DatePicker labelTex='Start date' key='dateIn' />
      <DatePicker labelTex='End date' key='dateOut' />
      <div className='button-wrapper'></div>
      <button type='button'>Cancel</button>
      <button type='submit'>Save</button>
    </form>
  );
}
