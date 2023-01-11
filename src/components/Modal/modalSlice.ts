import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  contentType: 'addItemToCart' | 'default';
  contentInfo: any
}

const initialState: ModalState = {
  isOpen: false,
  contentType: 'default',
  contentInfo: {}
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.contentType = action.payload.contentType;
      state.contentInfo = action.payload.contentInfo;
      
    },
    closeModal(state) {
      state.isOpen = false;
      state.contentType = 'default';
      state.contentInfo = {};
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;