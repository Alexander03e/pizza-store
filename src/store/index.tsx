import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter/slice";
import cart from "./slices/cart/slice";
import pizza from "./slices/pizza/slice";
export const store = configureStore({
  reducer: {
    filterReducer,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
