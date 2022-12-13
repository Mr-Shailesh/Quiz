import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addInputSlice = createSlice({
  name: "addInput",
  initialState: {
    inputArr: [
      {
        id: uuidv4(),
        type: "paragraph",
        value: [
          {
            children: [
              {
                text: "Create a new",
                marks: [],
              },
            ],
          },
        ],
        column: "Not_started",
      },
      {
        id: uuidv4(),
        type: "paragraph",
        value: [
          {
            children: [
              {
                text: "Create a new",
                marks: [],
              },
            ],
          },
        ],
        column: "Not_started",
      },
      {
        id: uuidv4(),
        type: "paragraph",
        value: [
          {
            children: [
              {
                text: "Create a new",
                marks: [],
              },
            ],
          },
        ],
        column: "Not_started",
      },
    ],
  },
  reducers: {
    add(state, { type, payload }) {
      state.inputArr.push(payload);
    },
    value(state, { type, payload }) {
      console.log("payload", payload);
      state.inputArr = payload;
    },
  },
});

export const addInputActions = addInputSlice.actions;
export default addInputSlice;
