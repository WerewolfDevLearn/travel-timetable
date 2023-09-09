import { createSlice } from '@reduxjs/toolkit';

import weatherOps from './weatherOps';

const { getCurrentForecastOP, getTimeIntervalForecastOp } = weatherOps;

const initialState = {
  forecastForThePeriod: [],
  CurrentForecast: {},
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentForecastOP.fulfilled, (state, { payload }) => {
      state.CurrentForecast = { ...payload };
    });
  },
});
