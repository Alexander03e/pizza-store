import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async (params: any) => {
    const {categoryId, sort} = params
    try {
      const {data} = await axios
      // .get(
      //   `https://65b2cba49bfb12f6eafe6e08.mockapi.io/items?${
      //     categoryId !== 0 ? `category=${categoryId}&` : ""
      //   }&sortBy=${sort.sortProperty}&order=asc`
      // )
      .get(
        `https://65b2cba49bfb12f6eafe6e08.mockapi.io/items?${
          categoryId !== 0 ? `category=${categoryId}&` : ""
        }&sortBy=${sort.sortProperty}&order=asc`
      )

      return data
      // .then((res) => (setPizzas(res.data), setIsLoading(false)));

    }catch(e){
      console.log(e)
    }
  }
)