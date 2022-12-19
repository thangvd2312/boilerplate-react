import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { RootState } from 'store';
import request from 'util/request';

interface AuthState {}

const initialState: AuthState = {};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    actionLogout(state) {
      // TODO: implement action logout
    },
  },

  extraReducers: (builder) => {
    // builder.
    //   // LOGIN ADMIN
  },
});

export const { actionLogout } = slice.actions;

export default slice.reducer;
