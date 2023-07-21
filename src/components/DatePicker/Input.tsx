interface IProps {
  inputValue: string;
  labelTex: string;
  onClickHandler: () => void;
}

export default function InputDate({ inputValue, labelTex, onClickHandler }: IProps) {
  return (
    <div className='input-wrapper'>
      <label className='input-label' htmlFor='start-date'>
        {labelTex}
      </label>
      <div className='input-decor'>
        <input
          className='input-field'
          type='text'
          autoComplete='off'
          value={inputValue}
          placeholder={inputValue}
          onClick={onClickHandler}
          name='start-date'
          onChange={() => console.log('yes')}
        />
      </div>
    </div>
  );
}