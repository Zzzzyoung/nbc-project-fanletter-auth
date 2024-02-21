import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../axios/api";
import { toast } from "react-toastify";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
  isLoading: false,
  isError: false,
  error: null,
};

export const __login = createAsyncThunk(
  "login",
  async ({ id, password }, thunkAPI) => {
    // 로그인
    try {
      // accessToken 유효 시간 조정
      const { data } = await authApi.post("/login?expiresIn=10m", {
        id,
        password,
      });

      const { accessToken, avatar, nickname, userId } = data;

      if (data.success) {
        toast.success("로그인 성공!");
        return { accessToken, avatar, nickname, userId }; // 객체로 넘겨주기
      }
    } catch (error) {
      console.error("error", error);
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__login.pending, (state, action) => {
        // 통신이 아직 진행 중일 때
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const { accessToken, avatar, nickname, userId } = action.payload;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("avatar", avatar);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("userId", userId);
        state.isLogin = true;
        state.avatar = avatar;
        state.nickname = nickname;
        state.userId = userId;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
