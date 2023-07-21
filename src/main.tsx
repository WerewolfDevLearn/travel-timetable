// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter basename='/travel-timetable'>
    <App />,
  </BrowserRouter>,
  // </React.StrictMode>,
);

// import { getTimeIntervalForecast } from './services/weatherAPI.js';

// const data = getTimeIntervalForecast('New', '2023-07-03', '2023-08-31');
// console.log('data: ', data);
