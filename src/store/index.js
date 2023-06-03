import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./modules/product";
import categoriesReducer from './modules/categories';
// initialize redux storage
export default configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
  },

})



