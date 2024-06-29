import { RootState } from "@/redux/store";

export const filterProductsSelector = (state: RootState) =>
  state.filterProductsReducer;
