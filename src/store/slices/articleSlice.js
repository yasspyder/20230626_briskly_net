import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticle = createAsyncThunk(
  "article/fetchArticle",
  async function (articleId) {
    const response = await fetch(
      `http://localhost:8010/proxy/api/get/article?id=${articleId}`
    );
    const data = await response.json();

    return data;
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState: {
    article: null,
    words: null,
    loading: false,
    error: false,
  },
  extraReducers: {
    [fetchArticle.pending]: (state) => {
      state.loading = true;
    },
    [fetchArticle.fulfilled]: (state, action) => {
      state.article = action.payload.article;
      state.words = action.payload.words;
      state.loading = false;
    },
    [fetchArticle.rejected]: () => {},
  },
});

export default articleSlice.reducer;
