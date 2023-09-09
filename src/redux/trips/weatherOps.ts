import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ITripReq } from '../../types';
import { getCurrentForecast, getTimeIntervalForecast } from '../../services/weatherAPI';

const getTimeIntervalForecastOp = createAsyncThunk<
  unknown,
  ITripReq,
  { rejectValue: string }
>('trips/getIntervalForecast', async (tripDate, { rejectWithValue }) => {
  try {
    const response = await getTimeIntervalForecast(tripDate);
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError<{ error: { message: string } }>(error)) {
      const errorAxios = error as AxiosError;
      return rejectWithValue(errorAxios.message);
    }
    return error;
  }
});
const getCurrentForecastOP = createAsyncThunk<unknown, string, { rejectValue: string }>(
  'trips/getIntervalForecast',
  async (tripDate, { rejectWithValue }) => {
    try {
      const response = await getCurrentForecast(tripDate);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError<{ error: { message: string } }>(error)) {
        const errorAxios = error as AxiosError;
        return rejectWithValue(errorAxios.message);
      }
      return error;
    }
  }
);
const weatherOps = {
  getTimeIntervalForecastOp,
  getCurrentForecastOP,
};
export default weatherOps;
