import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter";
import cart from "./slices/cart";
export const store = configureStore({
  reducer: {
    filterReducer,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
