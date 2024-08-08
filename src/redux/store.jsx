import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  // Component içerisinde counter adıyla çağırabiliriz 'store.counter.name' gibi
  }
})