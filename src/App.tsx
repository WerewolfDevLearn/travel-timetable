// import { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import { Section } from './components/Section/Section';
// import { Loader } from './components/Loader/Loader';
// import HomePage from './Pages/HomePage';
// import ErrorPage from './Pages/ErrorPage';
// import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
// import TripsPage from './Pages/TripsPage';
// import { DatePicker } from './components/DatePicker/DatePicker';
// import CustomLoader from './components/CustomLoader/CustomLoader';
import { useDayHendler } from './components/DatePicker/Calendar/DataHendler/DataHendler';
// import routes from './routes';

function App() {
  const [onPrevDay, onNextDay, dayD, monthD, yearD] = useDayHendler('2023-01-01');
  return (
    // <div className="app-container">{/* <CustomLoader /> */}</div>
    <>
      <div>{dayD}</div>
      <div>{monthD}</div>
      <div>{yearD}</div>

      <button onClick={onPrevDay}>prev</button>
      <button onClick={onNextDay}>next</button>
    </>
    // <DatePicker labelTex='start' />
    //   <Suspense fallback={<Loader />}>
    //     <Routes>
    //       <Route path={routes.home} element={<Section />}>
    //         <Route index element={<HomePage />} />
    //         <Route path={routes.login} element={<LoginPage />} />
    //         <Route path={routes.register} element={<RegisterPage />} />
    //         <Route path={routes.trips} element={<TripsPage />} />
    //         <Route path='*' element={<ErrorPage />} />
    //       </Route>
    //     </Routes>
    //   </Suspense>
  );
}

export default App;

// {
/* <>
      <header></header>
      <h1>Weather Forecast</h1>
      <img src='' alt='seacrch icon' />
      <input type='text'></input>
      <ul>
        <li>
          <img src='' alt='city' />
          <h3>City</h3>
          <p>date start - date end</p>
        </li>
        <li>
          <img src='' alt='city' />
          <h3>City</h3>
          <p>date start - date end</p>
        </li>
        <li>
          <img src='' alt='city' />
          <h3>City</h3>
          <p>date start - date end</p>
        </li>
        <li>
          <img src='' alt='city' />
          <h3>City</h3>
          <p>date start - date end</p>
        </li>
        <button>ADD trip</button>
      </ul>
      <div>
        <h2>Week</h2>
        <ul>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
          <li>
            <img src='' alt='weather' />
            <p>daytemp/nighttemp</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Day of the week</h3>
        <img src='' alt='weather icon' />
        <h4>City</h4>
        <ul>
          <li>days</li>
          <li>hours</li>
          <li>minuts</li>
          <li>seconds</li>
        </ul>
      </div>
    </>
  ); */
// }
