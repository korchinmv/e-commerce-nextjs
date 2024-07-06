import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/utils/getLocalStorage";
import { TProduct } from "@/types/Product";

const cartProducts =
  getLocalStorage("cartProducts") !== null
    ? getLocalStorage("cartProducts")
    : [];

const totalPrice =
  getLocalStorage("totalPrice") !== null ? getLocalStorage("totalPrice") : 0;

const setItemFunc = (products: TProduct[]): void => {
  localStorage.setItem("cartProducts", JSON.stringify(products));
};

const setPriceFunc = (totalPrice: number): void => {
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};

interface InitialState {
  cartProducts: TProduct[];
  isOpen: boolean;
  totalPrice: number;
}

const initialState: InitialState = {
  cartProducts,
  isOpen: false,
  totalPrice,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleStateCart: (state) => {
      state.isOpen = !state.isOpen;
      return state;
    },

    addProductInCart: (state, action: PayloadAction<TProduct>) => {
      const newItem = { ...action.payload, amount: 1 };

      const cartItem = state.cartProducts.find((item) => {
        return item.id === action.payload.id;
      });

      if (cartItem) {
        const newCart = [...state.cartProducts].map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });

        state.cartProducts = newCart;

        state.totalPrice = state.cartProducts.reduce((acc, item) => {
          return acc + item.price * item.amount;
        }, 0);

        setPriceFunc(state.totalPrice);
        setItemFunc(state.cartProducts);
      } else {
        state.cartProducts = [...state.cartProducts, newItem];
        state.totalPrice = state.cartProducts.reduce((acc, item) => {
          return acc + item.price * item.amount;
        }, 0);

        setPriceFunc(state.totalPrice);
        setItemFunc(state.cartProducts);
      }
    },

    decreaseAmount: (state, action: PayloadAction<TProduct>) => {
      const cartItem = state.cartProducts.find((item) => {
        return item.id === action.payload.id;
      });

      if (cartItem) {
        const newCart = state.cartProducts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });

        state.cartProducts = newCart;
        state.totalPrice = state.cartProducts.reduce((acc, item) => {
          return acc + item.price * item.amount;
        }, 0);

        setPriceFunc(state.totalPrice);
        setItemFunc(state.cartProducts);
      }
    },

    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter((product) => {
        return product.id !== action.payload;
      });
      state.totalPrice = state.cartProducts.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);

      setPriceFunc(state.totalPrice);
      setItemFunc(state.cartProducts);
    },

    deleteAllProductsFromCart: (state) => {
      state.cartProducts = [];
      state.totalPrice = 0;

      setPriceFunc(state.totalPrice);
      setItemFunc(state.cartProducts);
    },

    toggleProduct: (state, action: PayloadAction<TProduct>) => {
      if (state.cartProducts.length === 0) {
        state.cartProducts.push(action.payload as TProduct);
        state.totalPrice = action.payload.price;

        setPriceFunc(state.totalPrice);
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

          state.totalPrice = action.payload.price;

          setPriceFunc(state.totalPrice);
          setItemFunc(state.cartProducts.map((product) => product));
        }
      }
    },
  },
});

export const {
  toggleStateCart,
  addProductInCart,
  deleteProductFromCart,
  deleteAllProductsFromCart,
  toggleProduct,
  decreaseAmount,
} = cartReducer.actions;

export default cartReducer.reducer;
