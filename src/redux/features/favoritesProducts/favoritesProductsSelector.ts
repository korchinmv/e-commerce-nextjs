import { RootState } from "@/redux/store";

export const favoritesProductsSelector = (state: RootState) =>
  state.favoritesProductsReducer;
