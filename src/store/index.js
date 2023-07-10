import {configureStore} from '@reduxjs/toolkit'
import productReducer from "./modules/product";
import categoriesReducer from './modules/categories';
import navReducer from "./modules/nav";
import authReducer from "./modules/auth";
import cartReducer from './modules/cart';

// initialize redux storage
export default configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    product: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
})
