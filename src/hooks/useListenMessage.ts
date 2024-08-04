import { useEffect } from "react";
import { useSocket } from "./useSocket";
import { useAppDispatch } from "./reduxHooks";
import { addMessage } from "@/lib/features/messageSlice";

const useListenMessages = () => {
  const socket = useSocket();
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      dispatch(addMessage(newMessage));
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, dispatch, addMessage]);
};

export default useListenMessages;
