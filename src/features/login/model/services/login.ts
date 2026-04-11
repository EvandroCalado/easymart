import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserActions, type User } from '@/entities/user';

import { LOCAL_STORAGE_USER_KEY } from '@/shared/config';

type LoginArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  'features/login',
  async (authData, thunkApi) => {
    try {
      const res = await axios.post<User>(
        'http://localhost:3001/auth/login',
        authData,
      );
      const user = res.data;

      if (!user) {
        return thunkApi.rejectWithValue('User not found');
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));

      thunkApi.dispatch(UserActions.setUserData(user));
      return;
    } catch {
      thunkApi.rejectWithValue('Login Error');
    }
  },
);
