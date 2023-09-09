import axios from 'axios';

import { ITripReq } from '../types';

axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function getTimeIntervalForecast(tripDate: ITripReq) {
  const response = await axios.get(
    `/${tripDate.cityName}/${tripDate.dateIn}/${tripDate.dateOut}?unitGroup=metric&include=days&key=YGL969UZZ3QDZTHPTTQFGCRSN&contentType=json`
  );
  const data = response.data;
  return data;
}
export async function getCurrentForecast(location: string) {
  const response = await axios.get(
    `/${location}/today?unitGroup=metric&include=current&key=YGL969UZZ3QDZTHPTTQFGCRSN&contentType=json`
  );
  const data = response.data;
  return data;
}
