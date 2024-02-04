import { createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../../../App";
import { fetchPizza } from "./asyncAction";
import { Status } from "./types";

interface IPizzaState {
  pizzas: IPizza[];
  // cart: Array<any>
  status: Status | "idle";
}

const initialState: IPizzaState = {
  pizzas: [],
  status: "idle",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzas(state, action: any) {
      state.pizzas = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      action.payload ? (state.pizzas = action.payload) : "";
      state.status = Status.COMPLETED;
    }),
      builder.addCase(fetchPizza.pending, (state) => {
        state.status = Status.LOADING;
      });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
