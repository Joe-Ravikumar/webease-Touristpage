import { User } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  user: User | null;
  userIdForVerification: string | null;
}

const initialState: Partial<Auth> = {
  user: null,
  userIdForVerification: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setUserIdForVerification: (state, action: PayloadAction<string>) => {
      state.userIdForVerification = action.payload;
    },
    clearUserIdForVerification: (state) => {
      state.userIdForVerification = null;
    },
  },
});

export const {
  setUser,
  clearUser,
  setUserIdForVerification,
  clearUserIdForVerification,
} = authSlice.actions;

export default authSlice.reducer;
