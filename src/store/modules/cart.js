import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLocalStorage } from "../../services/cart";


//CartSLice 

export const cartSlice = createSlice ({
    name: "cart",
    initialState: {
      items: getCartFromLocalStorage(), // Iniflizetion cart from localStorage 
    },
    reducers: {
        addToCart: (state,action) => {
          const { product, quantity } = action.payload;
          const existingItem = state.items.find((item) => item.product.id === product.id);
          if (existingItem) {
          //If product in cart, add another  
            existingItem.quantity += quantity;
          } else {
            // If don't have product in cart, add product
            state.items.push({ product, quantity });
          }
        },
        updateQuantity: (state,action) => {
            const { productId, quantity } = action.payload;
            
            if(quantity >= 0 ) {
              const existingItem = state.items.find(item => item.product.id === productId); 
            
            if (existingItem) {
              existingItem.quantity = quantity;
            }
            }
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item.product.id !== productId);
        },
        clearCart: (state) => {
          state.items = [];
        }
    },
  })

  export const { addToCart, updateQuantity, removeItem, clearCart } = cartSlice.actions;

  export default cartSlice.reducer;