import {createSlice} from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    items: [
      {
        id: 'home',
        title: 'Home',
      },
      {
        id: 'contact',
        title: 'Contact',
      }
    ]
  },
  reducers: {

  },
});

// Export nav reducer
export default navSlice.reducer;