import fanLetters from "../modules/fanLetterSlice";
import member from "../modules/memberSlice";
import { configureStore } from "@reduxjs/toolkit";

// TO-DO: Redux Toolkit
const store = configureStore({
  reducer: {
    fanLetters,
    member,
  },
});

export default store;
