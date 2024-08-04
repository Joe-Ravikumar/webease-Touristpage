"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RatingStars from "./ratingstar";
import feedbackimg from "../../../public/assets/images/characters/feebackimg.png";
import { useAppSelector } from "@/hooks/reduxHooks";
import { stat } from "fs";
import useMutation from "@/hooks/useMutation";
import { createFeedBack } from "@/services/actions/feedback.services";
import toast from "react-hot-toast";

interface Feedback {
  name: string;
  description: string;
  rating: String | number;
}

const FeedbackForm: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [feedback, setFeedback] = useState<Feedback>({
    name: user?.username ?? "",
    description: "",
    rating: "0",
  });

  const [submitted, setSubmitted] = useState(false);

  const { data, error, isLoading, mutate, statusCode } =
    useMutation<any>(createFeedBack);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setFeedback({ ...feedback, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutate(feedback);
  };

  useEffect(() => {
    if (data) {
      toast.success("Thank you for your feedback!");
      setSubmitted(true);
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-16 w-full flex-col rounded-lg bg-white p-8">
      <div>
        <Image src={feedbackimg} alt="Feedback" />
      </div>
      <div>
        {submitted ? (
          <div>
            <p className="place-content-center text-blue-700 ">
              Thank you for your feedback!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="title-font mb-10 text-lg font-medium text-gray-900">
              Feedback
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={feedback.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="description"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={feedback.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label>Rating:</label>
              <RatingStars
                rating={Number(feedback.rating)}
                onRatingChange={handleRatingChange}
              />
            </div>
            <div>
              <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
