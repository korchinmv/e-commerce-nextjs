import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleStateCart: (state) => {
      return (state = !state);
    },
  },
});

export const { toggleStateCart } = cartReducer.actions;

export default cartReducer.reducer;
