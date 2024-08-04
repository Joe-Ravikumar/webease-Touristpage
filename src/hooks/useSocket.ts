import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  closeSocket,
  setOnlineUsers,
  setSocket,
} from "@/lib/features/socketSlice";
import { io } from "socket.io-client";

export const useSocket = () => {
  const dispatch = useAppDispatch();
  const socket = useAppSelector((state) => state.socket.socket);
  const authUser = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (authUser) {
      const newSocket = io(process.env.NEXT_PUBLIC_BACKEND_API_URL?.toString() || "http://localhost:5000", {
        query: { userID: authUser?._id },
      });

      dispatch(setSocket(newSocket));

      newSocket.on("getOnlineUsers", (users: any) => {
        dispatch(setOnlineUsers(users));
      });

      return () => {
        dispatch(closeSocket());
      };
    }
  }, [authUser, dispatch]);

  return socket;
};
