import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    
    async () => { 
        const response = await fetch(' https://fakestoreapi.com/products/categories')
        const json = await response.json();
        return json;
    }
    
)

export const categoriesSlice = createSlice({
    name : 'categories' ,
    initialState: { 
        loading: false,
        categories: [],
    },
    setLoading: (state,action) => {
        state.loading =action.payload;
    },
    extraReducers: { 
    
        [fetchCategories.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchCategories.fulfilled.type]: (state,action) => {
            state.loading = false;
            state.categories = action.payload; 
        },
        [fetchCategories.rejected.type]: (state) => {
            state.loading = false;
        }
    },
});

export const { setLoading } = categoriesSlice.actions;

export default categoriesSlice.reducer;