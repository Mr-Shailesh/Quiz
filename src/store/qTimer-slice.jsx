import { createSlice } from "@reduxjs/toolkit";

export const qTimerSlice = createSlice({
  name: "qTimer",
  initialState: {
    value: 60,
  },
  reducers: {
    decrementByOne: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const decrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrementByOne(amount));
  }, 1000);
};

export const { decrementByOne } = qTimerSlice.actions;
export const selectCount = (state) => state.qTimer.value;
export default qTimerSlice.reducer;
