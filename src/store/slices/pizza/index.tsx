import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  cart: [],
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
});
