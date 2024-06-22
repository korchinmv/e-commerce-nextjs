import cartReducer from "./features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import mobileMenuReducer from "@/redux/features/mobileMenu/mobileMenuSlice";

export const store = () => {
  return configureStore({
    reducer: {
      mobileMenuReducer,
      cartReducer,
      [api.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
