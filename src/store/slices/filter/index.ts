import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  }
}

const filterSlice = createSlice({
  name:'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    }, 
    setSort(state, action: PayloadAction<any>){
      state.sort.name = action.payload.name,
      state.sort.sortProperty = action.payload.sortProperty
    }
  }
})


export const { setCategoryId, setSort } = filterSlice.actions
export default filterSlice.reducer