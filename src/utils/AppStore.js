const { configureStore } = require("@reduxjs/toolkit");
import ResReducer from "./ResDataSlice";
import cartReducer from "./cartSlice";

let appStore = configureStore({
  reducer: {
    resData: ResReducer,
    cart: cartReducer,
  },
});

export default appStore;
