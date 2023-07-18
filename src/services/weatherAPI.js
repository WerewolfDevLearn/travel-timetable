import axios from 'axios';
axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function getTimeIntervalForecast(location, dateIn, dateOut) {
  const response = await axios.get(
    `/${location}/${dateIn}/${dateOut}?unitGroup=metric&include=current%2Cdays&key=YGL969UZZ3QDZTHPTTQFGCRSN&contentType=jsonZ`,
  );
  const data = response.data;
  return data;
}
