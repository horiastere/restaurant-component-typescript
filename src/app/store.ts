import { configureStore } from '@reduxjs/toolkit'

import menuReducer from '../features/Menu/menuSlice';
// import modalReducer from '../components/Modal/modalSlice';
// import cartReducer from '../features/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    // modal: modalReducer,
    // cart: cartReducer
  },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch