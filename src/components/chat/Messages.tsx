import { useEffect, useRef } from "react";
import MessageBody from "./MessageBody";
import useQuery from "@/hooks/useQuery";
import { getMessages } from "@/services/actions/message.Services";
import { Message } from "@/interfaces/interfaces";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { setMessages } from "@/lib/features/messageSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useListenMessages from "@/hooks/useListenMessage";

const Messages = () => {

  const { data, error, isLoading, statusCode, refetch } = useQuery<Message[]>(
    "Messages",
    () => getMessages()
  );

  const messages = useAppSelector((state) => state.messages.messages);
  const dispacher = useAppDispatch();

  useListenMessages();

  useEffect(() => {
    if (error) {
      console.error(error);
    }
    if(data){
      dispacher(setMessages(data?.data ?? data))
    }
  }, [data, error]);

  // let messages = [
  //   { message: "helloo", createdAt: "2024-06-06T18:01:52.998Z" },
  //   { message: "hey", createdAt: "2024-06-06T18:01:52.998Z" },
  //   { message: "hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", createdAt: "2024-06-06T18:01:52.998Z" },
  // ];

  const lastMessageEef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      lastMessageEef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto transition-all duration-300">
      {!isLoading &&
        messages?.length > 0 &&
        messages?.map((message: any) => (
          <div key={message._id} ref={lastMessageEef}>
            <MessageBody message={message} />
          </div>
        ))}
      {isLoading && [...Array(5)].map((_, i) => <MessageSkeleton key={i} />)}
      {!isLoading && messages?.length === 0 && (
        <div className="text-center text-gray-700">
          Send a message to start the conversation
        </div>
      )}
    </div>
  );
};

export default Messages;
