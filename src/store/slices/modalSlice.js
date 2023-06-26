import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    message: null,
    show: false,
    reason: null,
  },
  reducers: {
    showModal(state, action) {
      state.show = true;
      state.message = action.payload.message;
      state.reason = action.payload.reason;
    },
    closeModal(state) {
      state.show = false;
      state.message = null;
      state.reason = null;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
