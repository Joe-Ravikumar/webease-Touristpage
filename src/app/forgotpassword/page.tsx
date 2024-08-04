"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { forgetPassword } from "@/services/actions/auth.services";
import useMutation from "@/hooks/useMutation";
import toast from "react-hot-toast";
import { setUserIdForVerification } from "@/lib/features/authSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import LoadingAnimation from "@/components/LoadingAnimation";

const Forgotpassword = () => {
  const dispacher = useAppDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");

  const { data, error, isLoading, mutate } = useMutation<any>(forgetPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate({ email: email });
  };

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      dispacher(setUserIdForVerification(data?.userId));
      setEmail("");
      router.push(`/resetpassword`);
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="flex flex-col h-screen items-center justify-center w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">
           <span className="text-blue-600">webease</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="pb-2">
            <label htmlFor="label" className="label py-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full input input-bordered h-10 border border-gray-300 rounded-lg px-2 focus:border-[#1E88E5] focus:outline-none"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
            type="submit"
            disabled={isLoading}
          >
            Send OTP
            {isLoading && (
              <span className="ms-2">
                <LoadingAnimation />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
