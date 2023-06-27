import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api";
import axios from "axios";
import Product from "../models/product";

// create async function to fetch products
export const fetchProducts = createAsyncThunk(
  // action name
  "product/fetchProducts",
  async (category) => {
    // fetch products from api using axios client
    const {data} = await api.product.browseByCategory(category);
    // return products
    return data.map((product) => Product.fromJson(product));
  }
);

// craete async function to fetch ProductbyID

export const fetchProductById = createAsyncThunk(
  // action name 
  "product/fetchProductById",
  async (id) => {
    try{
      //async to server 
      const response = await api.product.show(id);
    return response.data;
    }
    catch (error) {
      throw new Error("Failed to fetch product")
    }
  }
);



// create product module
export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument

  initialState: {
    total: 0,
    loading: false,
    products: [],
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearProducts: (state, action) => {
      state.products = [];
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchProducts.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProductById.fulfilled.type]: (state,action) => {
      state.productInstanse = action.payload;
    },
    [fetchProductById.rejected.type]: (state) => {
      state.productInstanse = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const {setLoading, clearProducts} = productSlice.actions;

// export product reducer
export default productSlice.reducer;