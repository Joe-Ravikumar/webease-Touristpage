import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[400px] flex flex-col w-full h-full transition-all duration-300">
      <>
        {/* header */}
        <div className="fixed top-0 w-full bg-slate-200 px-4 py-2 mb-2 flex gap-2 items-center">
          <div className="w-10 rounded-full">
            {/* <img src={selectedConversation?.profilePic} /> */}
          </div>
          <span className="text-gray-900 font-bold">admin</span>
        </div>
        <div className="my-[90px]"><Messages /></div>
        <div className="fixed bottom-2 w-3/4 mx-20"><MessageInput /></div>
      </>
    </div>
  );
};

export default MessageContainer;

