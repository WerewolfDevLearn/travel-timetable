import axios from 'axios';
axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function getTimeIntervalForecast(location: string, dateIn: string, dateOut: string) {
  const response = await axios.get(
    `/${location}/${dateIn}/${dateOut}?unitGroup=metric&include=days&key=YGL969UZZ3QDZTHPTTQFGCRSN&contentType=json`,
  );
  const data = response.data;
  return data;
}
export async function getCurrentForecast(location: string) {
  const response = await axios.get(
    `/${location}/today?unitGroup=metric&include=current&key=YGL969UZZ3QDZTHPTTQFGCRSN&contentType=json`,
  );
  const data = response.data;
  return data;
}
