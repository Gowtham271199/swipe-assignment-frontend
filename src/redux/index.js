import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice";
import productsReducer from "./productsSlice"; // Import products reducer

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productsReducer, // Add products reducer
});

export default rootReducer;
