import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeItems: (state, action) => {
      state.cartItems.pop(action.payload);
    },

    clearCart: (state, action) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addCartItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
