import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userInfoSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    userinfo: userReducer,
  },
});

export default appStore;
