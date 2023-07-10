import { createSlice } from "@reduxjs/toolkit";



//CartSLice 

export const cartSlice = createSlice ({
    name: "cart",
    initialState: {
      items: [], // Mass of products in cart  
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
    },
  })

  export const { addToCart } = cartSlice.actions;

  export default cartSlice.reducer;