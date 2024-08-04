"use client";
import FeedbackForm from "@/components/feedback/feedbackform";
import React from "react";

const Feedback: React.FC = () => {
  return (
    <div className="flex justify-center xl:ml-[287px]">
      <div className="p-10">
        <FeedbackForm/>
      </div>
    </div>
  );
};

export default Feedback;