import Item from '@custom-types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ItemsState {
  allItems: Item[];
}

const initialState: ItemsState = {
  allItems: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.allItems = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
