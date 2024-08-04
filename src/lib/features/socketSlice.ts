import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SocketState {
  socket: any;
  onlineUsers: any[];
}

const initialState: SocketState = {
  socket: null,
  onlineUsers: []
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<any>) => {
      state.socket = action.payload;
    },
    setOnlineUsers: (state, action: PayloadAction<any[]>) => {
      state.onlineUsers = action.payload;
    },
    closeSocket: (state) => {
      if (state.socket) {
        state.socket.close();
        state.socket = null;
      }
    }
  }
});

export const { setSocket, setOnlineUsers, closeSocket } = socketSlice.actions;
export default socketSlice.reducer;
