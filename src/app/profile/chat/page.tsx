"use client";
import MessageContainer from "@/components/chat/MessageContainer";
import React from "react";

const OrderManagement: React.FC = () => {
  return (
    <div className="xl:ml-[287px]">
      <div className=" h-full">
        <MessageContainer />
      </div>
    </div>
  );
};

export default OrderManagement;
