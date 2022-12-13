import { configureStore } from "@reduxjs/toolkit";
import addInputSlice from "./addInput-slice";

// Redux Store

const store = configureStore({
  reducer: {
    addInput: addInputSlice.reducer,
  },
});

export default store;
