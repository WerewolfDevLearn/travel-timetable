export function WeatherWidget() {
  return (
    <>
      <h2 className='widget-heading'>Sunday</h2>
      <img src='' alt='current weather' className='widget-weather-icon' />
      <p className='widget-weather-temp'>24</p>
      <p className='widget-weather-city'>Berlin</p>
      <div className='count-down'>
        <span>30</span>
        <span>15</span>
        <span>15</span>
        <span>30</span>
      </div>
    </>
  );
}
