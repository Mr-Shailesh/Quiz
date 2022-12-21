import { configureStore } from "@reduxjs/toolkit";
import qTimerReducer from "./qTimer-slice";

const store = configureStore({
  reducer: {
    qTimer: qTimerReducer,
  },
});

export default store;
