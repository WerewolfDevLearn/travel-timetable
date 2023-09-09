import { createSlice } from '@reduxjs/toolkit';

import userOps from '../userOps';

const { getCurrent } = userOps;

const isRefreshingSlice = createSlice({
  name: 'isRefreshing',
  initialState: false,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrent.pending, () => true)
      .addCase(getCurrent.fulfilled, () => false)
      .addCase(getCurrent.rejected, () => false);
  },
});
export const isRefreshingReducer = isRefreshingSlice.reducer;
