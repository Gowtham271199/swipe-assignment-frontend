import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Import rootReducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
