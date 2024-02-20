import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getFanLetter = createAsyncThunk(
  "getFanLetter",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:4000/letters");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addFanLetter = createAsyncThunk(
  "addFanLetter",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/letters",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __deleteFanLetter = createAsyncThunk(
//   "deleteFanLetter",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.delete("http://localhost:4000/letters");
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const fanLetterSlice = createSlice({
  name: "fanLetter",
  initialState,
  reducers: {
    // addFanLetter: (state, action) => {
    //   const newFanLetter = action.payload;
    //   return [newFanLetter, ...state];
    // },
    // deleteFanLetter: (state, action) => {
    //   const fanLetterId = action.payload;
    //   return state.filter((fanLetter) => fanLetter.id !== fanLetterId);
    // },
    // editFanLetter: (state, action) => {
    //   const { id, editedTextArea } = action.payload;
    //   return state.map((fanLetter) => {
    //     if (fanLetter.id === id) {
    //       return { ...fanLetter, content: editedTextArea };
    //     } else {
    //       return fanLetter;
    //     }
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getFanLetter.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.letters = action.payload;
      })
      .addCase(__getFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__addFanLetter.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__addFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.letters = [...state.letters, action.payload]; // 배열로 변환
      })
      .addCase(__addFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    // builder
    //   .addCase(__deleteFanLetter.pending, (state, action) => {
    //     state.isLoading = true;
    //     state.isError = false;
    //   })
    //   .addCase(__deleteFanLetter.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.letters = [...state.letters, action.payload];
    //   })
    //   .addCase(__deleteFanLetter.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.error = action.payload;
    //   });
  },
});

export default fanLetterSlice.reducer;
export const { addFanLetter, deleteFanLetter, editFanLetter } =
  fanLetterSlice.actions;
