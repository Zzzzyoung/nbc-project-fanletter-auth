import { createSlice } from "@reduxjs/toolkit";
import fakeData from "fakeData.json";

const initialState = fakeData;

const fanLetterSlice = createSlice({
  name: "fanLetter",
  initialState,
  reducers: {
    addFanLetter: (state, action) => {
      const newFanLetter = action.payload;
      return [newFanLetter, ...state];
    },
    deleteFanLetter: (state, action) => {
      const fanLetterId = action.payload;
      return state.filter((fanLetter) => fanLetter.id !== fanLetterId);
    },
    editFanLetter: (state, action) => {
      const { id, editedTextArea } = action.payload;
      return state.map((fanLetter) => {
        if (fanLetter.id === id) {
          return { ...fanLetter, content: editedTextArea };
        } else {
          return fanLetter;
        }
      });
    },
  },
});

export default fanLetterSlice.reducer;
export const { addFanLetter, deleteFanLetter, editFanLetter } =
  fanLetterSlice.actions;
