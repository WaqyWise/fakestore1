import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {api} from "../../api";
import Category from "../models/category";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const {data} = await api.categories.browse();
    return data.map((category) => Category.fromJson(category));
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    loading: false,
    categories: [],
  },
  setLoading: (state, action) => {
    state.loading = action.payload;
  },
  extraReducers: {

    [fetchCategories.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [fetchCategories.rejected.type]: (state) => {
      state.loading = false;
    }
  },
});

export const {setLoading} = categoriesSlice.actions;

export default categoriesSlice.reducer;