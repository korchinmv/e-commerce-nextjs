import { getLocalStorage } from "@/utils/getLocalStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@/types/Product";

const cartProducts =
  getLocalStorage("cartProducts") !== null
    ? getLocalStorage("cartProducts")
    : [];

const setItemFunc = (products: TProduct[]): void => {
  localStorage.setItem("cartProducts", JSON.stringify(products));
};

interface InitialState {
  cartProducts: TProduct[];
  isOpen: boolean;
}

const initialState: InitialState = {
  cartProducts,
  isOpen: false,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleStateCart: (state) => {
      state.isOpen = !state.isOpen;
      return state;
    },
    addProductInCart: (state, action) => {
      state.cartProducts.push(action.payload);
      setItemFunc(state.cartProducts);
    },
    toggleProduct: (state, action: PayloadAction<TProduct>) => {
      if (state.cartProducts.length === 0) {
        state.cartProducts.push(action.payload as TProduct);
        setItemFunc(state.cartProducts.map((product) => product));
        return;
      }

      if (state.cartProducts.length > 0) {
        if (
          state.cartProducts.some((product) => product.id === action.payload.id)
        ) {
          state.cartProducts = state.cartProducts.filter(
            (product) => product.id !== action.payload.id
          );
          setItemFunc(state.cartProducts.map((product) => product));
        } else {
          state.cartProducts.push(action.payload as TProduct);
          setItemFunc(state.cartProducts.map((product) => product));
        }
      }
    },
  },
});

export const { toggleStateCart, addProductInCart, toggleProduct } =
  cartReducer.actions;

export default cartReducer.reducer;
