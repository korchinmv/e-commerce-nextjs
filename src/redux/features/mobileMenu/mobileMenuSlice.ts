import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const mobileMenuReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleStateMobileMenu: (state) => {
      return (state = !state);
    },
  },
});

export const { toggleStateMobileMenu } = mobileMenuReducer.actions;

export default mobileMenuReducer.reducer;
