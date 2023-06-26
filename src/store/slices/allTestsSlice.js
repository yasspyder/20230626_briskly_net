import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTests = createAsyncThunk(
  'tests/fetchTests',
  async function () {
    const response = await axios.get(
      'http://localhost:8010/proxy/api/get/tests'
    );
    if (response.data.success) return response.data.tests;
  }
);

const testsSlice = createSlice({
  name: 'tests',
  initialState: {
    loading: false,
    tests: [],
    error: null,
  },
  extraReducers: {
    [fetchTests.pending]: (state) => {
      state.loading = true;
    },
    [fetchTests.fulfilled]: (state, action) => {
      state.tests = action.payload;
      state.loading = false;
    },
    [fetchTests.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default testsSlice.reducer;
