import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILogin, IRegister, IUser } from 'types';

import { RootState } from '../store';

import {
  userRegister,
  userLogin,
  getCurrentUser,
  userLogOut,
  token,
} from '../../services/userAxAPI';

const register = createAsyncThunk<IUser, IRegister, { rejectValue: string }>(
  'user/Register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userRegister(userData);
      token.set(response.token);
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
const login = createAsyncThunk<IUser, ILogin, { rejectValue: string }>(
  'user/LogIn',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userLogin(userData);
      token.set(response.token);
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
const getCurrent = createAsyncThunk<IUser, undefined, { rejectValue: string }>(
  'user/GetCurrent',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      if (!state.user.token) return rejectWithValue('Please register or login!');
      const response = await getCurrentUser(state.user.token);
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
const logOut = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
  'user/LogOut',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const response = await userLogOut(state.user.token);
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

const userOps = {
  register,
  login,
  getCurrent,
  logOut,
};
export default userOps;
