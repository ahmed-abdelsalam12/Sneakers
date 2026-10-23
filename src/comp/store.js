import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Rudex";
import modalReducer from "./toggleRudex";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});
