"use client";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useAppDispatch } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { User } from "@/interfaces/interfaces";
import { setUserIdForVerification } from "@/lib/features/authSlice";
import { signup } from "@/services/actions/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();
  const dispacher = useAppDispatch();

  const initialFormData: Partial<User> = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<any>(initialFormData);

  const { data, error, isLoading, mutate } = useMutation<any>(signup);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      dispacher(setUserIdForVerification(data?._id));
      setFormData(initialFormData);
      router.push(`/verifyotp`);
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
          Signup <span className="text-blue-600">webease</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="label" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="label" className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered h-10"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="label" className="label pt-0 p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="label" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-Type your password"
              className="w-full input input-bordered h-10"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Link
            href={"/login"}
            className="hover:underline hover:text-blue-500 text-sm mt-2 inline-block"
          >
            {"Already have an account?"}
          </Link>
          <div>
            <button
              className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
              disabled={isLoading}
            >
              Signup
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
