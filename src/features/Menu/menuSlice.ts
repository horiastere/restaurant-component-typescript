import { CartItem } from './../../app/dataTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async () => {
    // OLD postman request URL
    // https://b9a852b4-204d-4d58-a1b6-e82b359a33ad.mock.pstmn.io/menu

     const response = await axios
      .get('http://localhost:9000/menu')
      .then(res => res.data );

    return response.categories;
  }
)

type MenuState = {
  isLoading: string;
  items: any[];
  error: boolean | string
}

const initialState: MenuState = {
  isLoading: 'idle',
  items: [],
  error: false
};


const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMenu.pending, state => {
        state.isLoading = 'pending'
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.isLoading = 'success'
        // TODO TypeScript
        const result: any[] = action.payload;
        state.items.push(...result)
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.isLoading = 'pending'
        state.error = `${action.error}`;
      })
  }
});

export default menuSlice.reducer
