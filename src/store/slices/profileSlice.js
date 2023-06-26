import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCookie from '../../services/getCookie';
import axios from 'axios';

export const login = createAsyncThunk(
  'profile/login',
  async function (authData) {
    await axios.get('https://breakhd2.store/sanctum/csrf-cookie');
    const response = await axios.post(
      'http://localhost:8010/proxy/api/auth/login',
      authData
    );
    if (response.data.success) {
      document.cookie = `api=${response.data.data.token}; path=/`;
    }
    return response.data;
  }
);

export const register = createAsyncThunk(
  'profile/register',
  async function (authData) {
    await axios.get('https://breakhd2.store/sanctum/csrf-cookie');

    const response = await axios.post(
      'http://localhost:8010/proxy/api/auth/register',
      authData
    );

    if (response.data.success) {
      document.cookie = `api=${response.data.data.token}; path=/`;
    }

    return response.data;
  }
);

export const confirmLogin = createAsyncThunk(
  'profile/confirmLogin',
  async function () {
    const response = await fetch('http://localhost:8010/proxy/api/get/user', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getCookie('api')}`,
      },
    });

    const data = await response.json();

    return data;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    token: null,
    profile: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        state.error = action.payload.errors;
        state.loading = false;
        return;
      }
      state.token = action.payload.data.token;
      state.profile = action.payload.data.profile;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        state.error = action.payload.errors;
        state.loading = false;
        return;
      }
      state.token = action.payload.data.token;
      state.profile = action.payload.data.profile;
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [confirmLogin.pending]: (state) => {
      state.loading = true;
    },
    [confirmLogin.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.profile = action.payload.profile;
      state.loading = false;
    },
    [confirmLogin.rejected]: (state, action) => {
      state.token = null;
      state.profile = null;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
