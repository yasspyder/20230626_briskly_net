import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async function () {
    const response = await fetch('http://localhost:8010/proxy/api/get/courses');
    const data = await response.json();

    return data.courses;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.loading = true;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.courses = action.payload;
      state.loading = false;
    },
    [fetchCourses.rejected]: () => {},
  },
});

export default coursesSlice.reducer;
