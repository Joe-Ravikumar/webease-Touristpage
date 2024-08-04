"use client";

import LoadingAnimation from "@/components/LoadingAnimation";
import { useAppDispatch } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { User } from "@/interfaces/interfaces";
import { setUser } from "@/lib/features/authSlice";
import { login } from "@/services/actions/auth.services";
import { storeUserData } from "@/utils/secureStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const dispacher = useAppDispatch();

  const initialFormData: Partial<User> = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const [formData, setFormData] = useState<any>(initialFormData);

  const { data, error, isLoading, mutate } = useMutation<User>(login);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data) {
      toast.success("logdedin successful");
      dispacher(setUser(data));
      setFormData(initialFormData);
      router.push(data.role === "admin" ? "http://localhost:3001/dashboard" : "/profile");
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="flex flex-col items-center h-screen justify-center mx-auto w-[460px]">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-6xl text-center text-[#1E88E5] pb-4">
            Web<span className="text-[#1E88E5] font-black text-6xl">Ease</span>
          </h1>

          <p className="text-center">Welcome to the WebEse Dashboard</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="pb-2">
            <label htmlFor="label" className="label py-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full input input-bordered h-10 border border-gray-300 rounded-lg px-2 focus:border-[#1E88E5] focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="pb-4">
            <label htmlFor="label" className="label py-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10 border border-gray-300 rounded-lg px-2 focus:border-[#1E88E5] focus:outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="w-full text-center flex gap-2 items-center justify-center">
            <Link
              href={"/forgotpassword"}
              className="hover:underline text-blue-800 hover:text-blue-500 text-sm mt-2 inline-block text-center"
            >
              Forget Password? 
            </Link>
            <Link
              href={"/signup"}
              className="hover:underline text-blue-800 hover:text-blue-500 text-sm mt-2 inline-block text-center"
            >
              Create Account
            </Link>
          </div>
          <div className="mt-5">
            <button
              className="bg-[#1E88E5] hover:bg-[#002147] text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-50"
              disabled={isLoading}
            >
              Login
              {isLoading && (
                <span className="ms-2">
                  <LoadingAnimation />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
