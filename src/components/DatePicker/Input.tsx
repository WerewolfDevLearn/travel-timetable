import CalendarIcon from 'components/Icons/CalendarIcon';

interface IProps {
  inputValue: string;
  labelTex: string;
  onClickHandler: () => void;
  forId: string;
}

export default function InputDate({ inputValue, labelTex, onClickHandler, forId }: IProps) {
  return (
    <>
      <label className="add-trip-form-lable" htmlFor={forId}>
        {labelTex}
      </label>
      <div className="input-decor">
        <input
          id={forId}
          className="input-field"
          type="text"
          autoComplete="off"
          value={inputValue}
          placeholder="Select a date"
          onClick={onClickHandler}
          name={forId}
          readOnly={true}
        />
        <CalendarIcon width="15" height="15" viewBox="0 0 141 146" fill="#d9d9d9" />
      </div>
    </>
  );
}
