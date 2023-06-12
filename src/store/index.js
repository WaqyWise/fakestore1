import {configureStore} from '@reduxjs/toolkit'
import productReducer from "./modules/product";
import categoriesReducer from './modules/categories';
import navReducer from "./modules/nav";
import authReducer from "./modules/auth";
// initialize redux storage
export default configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    product: productReducer,
    categories: categoriesReducer,
  },
})
