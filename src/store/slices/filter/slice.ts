import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  searchValue: ''
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
    },
    setSearchValue(state, action){
      state.searchValue = action.payload
    }
  }
})


export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions
export default filterSlice.reducer