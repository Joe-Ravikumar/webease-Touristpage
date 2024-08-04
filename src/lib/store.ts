import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import messageSlice from "./features/messageSlice";
import socketSlice from "./features/socketSlice";
import orderSlice from "./features/orderSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      messages: messageSlice,
      socket: socketSlice,
      order: orderSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ["socket/setSocket"],
          // Ignore these field paths in all actions
          ignoredActionPaths: ["payload"],
          // Ignore these paths in the state
          ignoredPaths: ["socket.socket"],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
