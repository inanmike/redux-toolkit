import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer 
  // Component içerisinde counter adıyla çağırabiliriz 'store.counter.name' gibi
  }
})