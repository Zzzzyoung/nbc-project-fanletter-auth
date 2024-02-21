import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth";
import { fanLetterApi } from "../../api/fanLetter";
import { logout } from "./authSlice";
import { toast } from "react-toastify";

const initialState = {
  fanLetters: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getFanLetter = createAsyncThunk(
  "getFanLetter",
  async (payload, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (data.success) {
        const { data } = await fanLetterApi.get("/fanLetters?_sort=-createdAt");
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addFanLetter = createAsyncThunk(
  "addFanLetter",
  async (newFanLetter, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (data.success) {
        const { data } = await fanLetterApi.post(
          "/fanLetters?_sort=-createdAt",
          newFanLetter
        );
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteFanLetter = createAsyncThunk(
  "deleteFanLetter",
  async (id, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (data.success) {
        await fanLetterApi.delete(`/fanLetters/${id}`);
        const { data } = await fanLetterApi.get("/fanLetters?_sort=-createdAt");
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editFanLetter = createAsyncThunk(
  "editFanLetter",
  async ({ id, editedTextArea }, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (data.success) {
        await fanLetterApi.patch(`/fanLetters/${id}`, {
          content: editedTextArea,
        });
        const { data } = await fanLetterApi.get("/fanLetters?_sort=-createdAt");
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateFanLetter = createAsyncThunk(
  "updateFanLetter",
  async ({ editingText, editingImg }, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (data.success) {
        const userId = localStorage.getItem("userId");
        const { data } = await fanLetterApi.get(`/fanLetters?userId=${userId}`);

        for (let index = 0; index < data.length; index++) {
          const element = data[index];

          fanLetterApi.patch(
            `/fanLetters/${element.id}`,
            {
              nickname: editingText,
              avatar: editingImg,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }

        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fanLetterSlice = createSlice({
  name: "fanLetters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getFanLetter.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.fanLetters = action.payload;
      })
      .addCase(__getFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__addFanLetter.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__addFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.fanLetters = [action.payload, ...state.fanLetters]; // 배열로 변환
      })
      .addCase(__addFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__deleteFanLetter.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.fanLetters = action.payload;
      })
      .addCase(__deleteFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__editFanLetter.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__editFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.fanLetters = action.payload;
      })
      .addCase(__editFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
    builder
      .addCase(__updateFanLetter.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__updateFanLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.fanLetters = action.payload;
      })
      .addCase(__updateFanLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default fanLetterSlice.reducer;
