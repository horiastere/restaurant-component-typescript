import { createSlice } from "@reduxjs/toolkit";

const itemsFromStorage = JSON.parse(window.sessionStorage.getItem('cart'));

const initialState = {
  isLoading: false,
  items: itemsFromStorage || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        window.sessionStorage.setItem("cart", JSON.stringify(state.items));
        
      },
      prepare: ({item, extraOptions, extraInstructions, quantity}) => {
        return {
          payload: {
            item,
            extraOptions: extraOptions.filter(el => el.isChecked === true),
            extraInstructions,
            quantity
          }
        }
      }
    }
  }
});

export const noOfItemsInCart = state => state.cart.items.length;

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;