import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLesson = createAsyncThunk(
  'lesson/fetchLessonById',
  async function (lessonId) {
    const response = await fetch(
      `http://localhost:8010/proxy/api/get/lesson?id=${lessonId}`
    );
    const data = await response.json();

    return data;
  }
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState: {
    lesson: null,
    loading: false,
    error: false,
  },
  extraReducers: {
    [fetchLesson.pending]: (state) => {
      state.loading = true;
    },
    [fetchLesson.fulfilled]: (state, action) => {
      state.lesson = action.payload;
      state.loading = false;
    },
    [fetchLesson.rejected]: () => {},
  },
});

export default lessonSlice.reducer;
