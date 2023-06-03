import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

// create async function to fetch products
export const fetchProducts = createAsyncThunk(
  // action name
  "product/fetchProducts",
  async () => {
    // fetch products from api using axios client
    const response = await api.product.browse();
    // return products
    return response.data;
  }
);

// create product module
export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
    
    initialState: {
    total: 0,
    loading: false,
    products: []
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
    }
  }
});

// Action creators are generated for each case reducer function
export const { setLoading, clearProducts } = productSlice.actions;

// export product reducer
export default productSlice.reducer;