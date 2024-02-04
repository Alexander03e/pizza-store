import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async (params: any, { rejectWithValue }) => {
    const {categoryId, sort, searchValue} = params
    try {
      const {data} = await axios
        .get(
          `https://65b2cba49bfb12f6eafe6e08.mockapi.io/items?${
            categoryId !== 0 ? `category=${categoryId}&` : ""
          }&sortBy=${sort.sortProperty}&title=${searchValue}&order=asc`
        )
      
      return data
    }catch(e){
      return rejectWithValue(e)
    }
  }
)