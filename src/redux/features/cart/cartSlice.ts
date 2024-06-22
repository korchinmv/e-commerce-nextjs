import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleState: (state) => {
      return (state = !state);
    },
  },
});

export const { toggleState } = cartReducer.actions;

export default cartReducer.reducer;
