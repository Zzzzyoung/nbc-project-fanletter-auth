import fanLetters from "../modules/fanLetterSlice";
import member from "../modules/memberSlice";
import auth from "../modules/authSlice";
import { configureStore } from "@reduxjs/toolkit";

// TO-DO: Redux Toolkit
const store = configureStore({
  reducer: {
    fanLetters,
    member,
    auth,
  },
});

export default store;
