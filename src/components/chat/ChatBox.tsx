"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useAppSelector } from "@/hooks/reduxHooks";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4">
      {/* Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
        >
          <Icon icon="mdi:chat" className="w-6 h-6" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen &&
        (user ? (
          <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-300">
            <div className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-t-lg">
              <h4 className="font-bold">Chat</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full focus:outline-none"
              >
                <Icon icon="mdi:close" className="w-4 h-4" />
              </button>
            </div>
            <div className="mb-5 max-h-[350px] overflow-y-auto">
              <Messages />
            </div>
            <div className="border-t border-gray-300">
              <MessageInput />
            </div>
          </div>
        ) : (
          <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-300">
            <div className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-t-lg">
              <h4 className="font-bold">Chat</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full focus:outline-none"
              >
                <Icon icon="mdi:close" className="w-4 h-4" />
              </button>
            </div>
            <div className="mb-5 max-h-[350px] overflow-y-auto flex flex-col items-center justify-center p-5">
              <h2 className="text-xl">To chat</h2>
              <Button
                btnText="Get Started"
                border="none"
                borderColor="white"
                backgroundColor="#80BBFF"
                fontColor="white"
                click={() => router.push("/login")}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatBox;
