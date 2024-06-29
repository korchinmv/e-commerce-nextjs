import { configureStore } from "@reduxjs/toolkit";
import favoritesProductsReducer from "./features/favoritesProducts/favoritesProductsSlice";
import filterProductsReducer from "./features/filterProducts/filterProductsSlice";
import mobileMenuReducer from "@/redux/features/mobileMenu/mobileMenuSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = () => {
  return configureStore({
    reducer: {
      favoritesProductsReducer,
      mobileMenuReducer,
      cartReducer,
      filterProductsReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
