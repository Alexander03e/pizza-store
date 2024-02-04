import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../../../App";

export interface IPizzaCart extends Omit<IPizza, "sizes" | "types"> {
  size: number;
  type: string;
  count:number;
}

interface ICart {
  items: Array<IPizzaCart>,
  totalPrice: number
}

const initialState: ICart = {
  totalPrice: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers:{
    // addItem(state, action: PayloadAction<IPizzaCart>) {
    //   action.payload ? state.items.push(action.payload) : ''
    // },
    addItem(state, action: PayloadAction<IPizzaCart>) {
      const payload = action.payload
      const findPizza = state.items.find(item => item.id === payload.id && item.type === payload.type && item.size === payload.size)
      findPizza ? findPizza.count++ : state.items.push({...action.payload, count: 1})
      
      state.totalPrice = state.items.reduce((sum, val) =>  val.price*val.count + sum, 0)
    },
    removeItem(state, action: PayloadAction<IPizzaCart>){
      state.items = state.items.filter(item => item.id != action.payload.id)
      
      state.totalPrice = state.items.reduce((sum, val) =>  val.price*val.count + sum, 0)
    },
    clearCart(state) {
      state.items = []
      
      state.totalPrice = 0
    },
    removeOneItem(state, action: PayloadAction<IPizzaCart>) {
      const findPizza = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)
      if (findPizza && findPizza.count > 1) {
        findPizza.count--
      } else{
        state.items = state.items.filter(item => findPizza != item)
      }
      
      state.totalPrice = state.items.reduce((sum, val) =>  val.price*val.count + sum, 0)
    },
    addOneItem(state, action){
      const findPizza = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)
      findPizza ? findPizza.count++ : ''
      
      state.totalPrice = state.items.reduce((sum, val) =>  val.price*val.count + sum, 0)
    }
  }
})


export const { addItem, removeItem, clearCart, removeOneItem, addOneItem } = cartSlice.actions
export default cartSlice.reducer