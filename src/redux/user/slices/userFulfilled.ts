import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IUser } from 'types';

import userOps from '../userOps';

const { getCurrent, register, login, logOut } = userOps;
const initialState: IUser = {
  email: '',
  name: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state: IUser, { payload }) => {
        state.token = payload.token;
        state.email = payload.email;
        state.name = payload.name;
      })
      .addCase(login.fulfilled, (state: IUser, { payload }) => {
        state.token = payload.token;
        state.email = payload.email;
        state.name = payload.name;
      })
      .addCase(getCurrent.fulfilled, (state: IUser, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
      })
      .addCase(logOut.fulfilled, () => initialState);
  },
});
const persistUserConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
