import SelectIcon from 'components/Icons/SelectIcon';

import { DatePicker } from '../DatePicker/DatePicker';

interface IAddTripForm {
  onClose: () => void;
}
interface CustomElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
  dateIn: HTMLInputElement;
  dateOut: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
export default function AddTripForm({ onClose }: IAddTripForm) {
  const onSubmit = (event: React.FormEvent<CustomForm>) => {
    event.preventDefault();
    const { city, dateIn, dateOut } = event.currentTarget.elements;

    const data = {
      city: city.value,
      dateIn: dateIn.value,
      dateOut: dateOut.value,
    };
    console.log('data: ', data);
    onClose();
  };
  return (
    <form id="AddTripForm" className="add-trip-form" onSubmit={onSubmit}>
      <h2 className="add-trip-form-heading">Create trip</h2>
      <div className="inputs-container">
        <label htmlFor="city" className="add-trip-form-lable">
          City
        </label>
        <div className="select-decor">
          <select name="city" id="city" className="add-trip-select">
            <option value="">Pleace select a city</option>
            <option value="Kyiv">Kyiv</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
          </select>
          <SelectIcon
            width="10"
            height="10"
            viewBox="0 0 11 8"
            fill="transparent"
            stroke="#d9d9d9"
          />
        </div>
        <DatePicker labelTex="Start date" key="dateIn" forId="dateIn" />
        <DatePicker labelTex="End date" key="dateOut" forId="dateOut" />
      </div>
      <div className="button-wrapper">
        <button type="button" className="add-trip-form-button" onClick={() => onClose()}>
          Cancel
        </button>
        <button type="submit" className="add-trip-form-button">
          Save
        </button>
      </div>
    </form>
  );
}
