import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  messageSuccess: '',
  messageError: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showSuccess: (state, action) => {
      state.isVisible = true;
      state.messageSuccess = action.payload;
      state.messageError = ''; // Clear error message
    },
    showError: (state, action) => {
      state.isVisible = true;
      state.messageError = action.payload;
      state.messageSuccess = ''; // Clear success message
    },
    hideAlert: (state) => {
      state.isVisible = false;
      state.messageSuccess = '';
      state.messageError = '';
    },
  },
});

export const { showSuccess, showError, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
