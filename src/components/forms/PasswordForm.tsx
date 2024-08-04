"use client";
import useMutation from "@/hooks/useMutation";
import { changePassword } from "@/services/actions/client.services";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingAnimation from "../LoadingAnimation";

export default function PasswordForm() {
  const initialFormData = {
    oldPassword: "",
    newPassword: "",
    ConfirmPassword: "",
  };

  const [formData, setFormData] = useState<any>(initialFormData);

  const { data, error, isLoading, mutate } = useMutation<any>(changePassword);

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
      toast.success(data.message);
      setFormData(initialFormData);
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);
  return (
    <div className="">
      <div className="flex justify-start">
        <h1 className="text-4xl mt-8 flex">
          <Icon icon={"material-symbols:security"} className="me-2" /> Change
          your Password
        </h1>
      </div>
      <div className="bg-white rounded-xl shadow-md flex mt-5 w-full ">
        <div className="flex flex-col p-5 w-full">
          <form onSubmit={handleSubmit}>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2 text-blue-400">
                <span className="text-base font-bold">Old Password</span>
              </label>
              <input
                type="password"
                placeholder="UserID"
                className="w-full h-10 rounded-lg"
                name="oldPassword"
                required
                disabled={isLoading}
                value={formData.oldPassword}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
              />
            </div>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2 text-blue-400">
                <span className="text-base font-bold">New Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your username"
                className={`w-full rounded-lg h-10 "bg-slate-200`}
                name="newPassword"
                required
                value={formData.newPassword}
                onChange={handleChange}
                disabled={isLoading}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"

              />
            </div>
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2 text-blue-400">
                <span className="text-base font-bold">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Retype your password"
                className={`w-full rounded-lg h-10 "bg-slate-200`}
                required
                name="ConfirmPassword"
                value={formData?.ConfirmPassword}
                onChange={handleChange}
                disabled={isLoading}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
              />
            </div>

            <div className="my-2">
              <button
                className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
                disabled={isLoading}
              >
                Save
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
    </div>
  );
}
