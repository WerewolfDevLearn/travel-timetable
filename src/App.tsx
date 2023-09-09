import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Section } from './components/Section/Section';
import PubliceRourtes from './components/Routes/PubliceRoutes';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import TripsPage from './Pages/TripsPage';
import CustomLoader from './components/CustomLoader/CustomLoader';
import routes from './routes';

function App() {
  return (
    <div className="app-container ">
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route path={routes.home} element={<Section />}>
            <Route element={<PubliceRourtes />}>
              <Route index element={<HomePage />} />
              <Route path={routes.login} element={<LoginPage />} />
              <Route path={routes.register} element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path={routes.trips} element={<TripsPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
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
