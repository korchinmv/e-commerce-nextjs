import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/utils/getLocalStorage";
import { TProduct } from "@/types/Product";

const products =
  getLocalStorage("favoritesProducts") !== null
    ? getLocalStorage("favoritesProducts")
    : [];

const totalFavoritesQuantity =
  getLocalStorage("totalQuantity") !== null
    ? getLocalStorage("totalQuantity")
    : 0;

const setItemFunc = (products: TProduct[], totalQuantity: number): void => {
  localStorage.setItem("favoritesProducts", JSON.stringify(products));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

interface InitialState {
  favoritesListProduct: TProduct[];
  totalFavoritesQuantity: number;
}

const initialState: InitialState = {
  favoritesListProduct: products,
  totalFavoritesQuantity,
};

export const favoritesProductsReducer = createSlice({
  name: "favoritesProducts",
  initialState,

  reducers: {
    toggleLikeProduct: (state, action: PayloadAction<TProduct>) => {
      if (state.favoritesListProduct.length === 0) {
        state.favoritesListProduct.push(action.payload as TProduct);
        state.totalFavoritesQuantity = state.favoritesListProduct.length;
        setItemFunc(
          state.favoritesListProduct.map((product) => product),
          state.totalFavoritesQuantity
        );
        return;
      }

      if (state.favoritesListProduct.length > 0) {
        if (
          state.favoritesListProduct.some(
            (product) => product.id === action.payload.id
          )
        ) {
          state.favoritesListProduct = state.favoritesListProduct.filter(
            (product) => product.id !== action.payload.id
          );
          state.totalFavoritesQuantity = state.favoritesListProduct.length;
          setItemFunc(
            state.favoritesListProduct.map((product) => product),
            state.totalFavoritesQuantity
          );
        } else {
          state.favoritesListProduct.push(action.payload as TProduct);
          state.totalFavoritesQuantity = state.favoritesListProduct.length;
          setItemFunc(
            state.favoritesListProduct.map((product) => product),
            state.totalFavoritesQuantity
          );
        }
      }
    },
  },
});

export const { toggleLikeProduct } = favoritesProductsReducer.actions;

export default favoritesProductsReducer.reducer;
