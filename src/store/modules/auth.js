import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: window.localStorage.getItem('token') || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      window.localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      window.localStorage.removeItem('token');
    }
  }
});

export const {setToken, clearToken} = authSlice.actions;

export default authSlice.reducer;