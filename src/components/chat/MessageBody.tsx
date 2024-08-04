import { useAppSelector } from "@/hooks/reduxHooks";
import { Message } from "@/interfaces/interfaces";
import { extracTime } from "@/utils/extractTime";

const MessageBody = ({ message }: { message: Message }) => {
  const authUser = useAppSelector((state) => state.auth.user);

  const fromMe = message.senderID === authUser?._id;
  const chatClassName = fromMe ? "flex-row-reverse" : "flex-row"; 
  const profileImage = fromMe
    ? authUser?.profilePic
    : "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar";
    
  const bubbleColor = fromMe ? "bg-blue-300" : "bg-gray-300";

  return (
    <div className={`flex items-start ${chatClassName}`}> 
        <div className="w-10 rounded-full">
          <img
            alt="Profile"
            className="rounded-full w-[48px] h-[48px] object-cover"
            src={profileImage}
          />
        </div>
      <div className="max-w-[280px]">
        <div
          className={`flex gap-2.5 leading-1.5 p-3 ${bubbleColor} ${fromMe ? 'mr-1 mt-4 rounded-s-2xl rounded-ee-2xl' : 'ml-1 mt-4 rounded-e-2xl rounded-es-2xl'}`}
        >
          <span className="break-words max-w-full">{message?.message}</span>
        </div>
        <div className={`text-slate-500 text-${fromMe ? 'end' : 'start'} ${fromMe ? 'me-4' : 'ms-4'}`}> 
          {extracTime(message?.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default MessageBody;
