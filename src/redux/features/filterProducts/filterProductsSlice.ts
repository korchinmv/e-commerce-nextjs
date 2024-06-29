import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/utils/getLocalStorage";
import { TProduct } from "@/types/Product";

const filtredProducts =
  getLocalStorage("filtredProducts") !== null
    ? getLocalStorage("filtredProducts")
    : [];

const setItemFunc = (products: TProduct[]): void => {
  localStorage.setItem("filtredProducts", JSON.stringify(products));
};

interface InitialState {
  filtredProduct: TProduct[];
}

const initialState: InitialState = {
  filtredProduct: filtredProducts,
};

export const filtredProductsReducer = createSlice({
  name: "filtredProducts",
  initialState,

  reducers: {
    changeFiltredProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.filtredProduct = action.payload;
      setItemFunc(state.filtredProduct);
    },
  },
});

export const { changeFiltredProducts } = filtredProductsReducer.actions;

export default filtredProductsReducer.reducer;
