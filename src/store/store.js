import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import categryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categryReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});
export default store;
