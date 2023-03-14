import { createSlice } from "@reduxjs/toolkit";
import { CartItem, ExtraOptionsType, ActionType } from '../../app/dataTypes';
import { RootState } from '../../app/store';

const itemsFromStorage = JSON.parse(window.sessionStorage.getItem('cart') || '{}');

const initialState = {
  isLoading: false,
  items: itemsFromStorage || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, action: ActionType) => {
        state.items.push(action.payload);
        window.sessionStorage.setItem("cart", JSON.stringify(state.items));
        
      },
      prepare(payload: CartItem) {
        const {item, extraOptions, extraInstructions, quantity} = payload;
        return {
          payload: {
            item,
            extraOptions: extraOptions.filter((el: ExtraOptionsType) => el.isChecked === true),
            extraInstructions,
            quantity
          }
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item: CartItem) => item.item.id !== action.payload);
      window.sessionStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
});

export const noOfItemsInCart = (state: RootState) => state.cart.items.length;

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;