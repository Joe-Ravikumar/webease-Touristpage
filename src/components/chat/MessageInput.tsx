import { useAppDispatch } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { Message } from "@/interfaces/interfaces";
import { addMessage } from "@/lib/features/messageSlice";
import { sendMessage } from "@/services/actions/message.Services";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const dispatch = useAppDispatch();

  const [message, setMessages] = useState("");

  const { data, error, isLoading, mutate } =
    useMutation<Partial<Message>>(sendMessage);

  useEffect(() => {
    if (data) {
      dispatch(addMessage(data));
      setMessages("");
    }
    if (error) {
      toast.error("Failed to send message");
      console.error(error);
    }
  }, [data, error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    await mutate({message: message });
  };

  return (
    <form className="px-4 my-3 w-full" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="w-full input input-bordered h-10 border border-gray-500 px-2 focus:border-[#1E88E5] focus:outline-none rounded-full"
          placeholder="Send a message..."
          onChange={(e) => setMessages(e.target.value)}
          value={message}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute inset-y-1 end-1 flex items-center order-3 bg-[#1E88E5] hover:bg-[#002147] text-white p-2 rounded-full justify-center disabled:opacity-50"
        >
          {isLoading && <span className="animate-ping me-1">...</span>}
          <Icon icon={"bi:send-fill"} className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
