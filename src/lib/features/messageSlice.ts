import { Conversation, Message } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageState {
  messages: Message[];
  selectedConversation: Conversation | null;
}

const initialState: MessageState = {
  messages: [],
  selectedConversation: null,
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      if (!Array.isArray(state.messages)) {
        state.messages = [];
      }
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    setSelectedConversation: (
      state,
      action: PayloadAction<Conversation | null>
    ) => {
      state.selectedConversation = action.payload;
    },
    clearSelectedConversation: (state) => {
      state.selectedConversation = null;
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  clearMessages,
  setMessages,
  setSelectedConversation,
  clearSelectedConversation,
} = messageSlice.actions;

export default messageSlice.reducer;
