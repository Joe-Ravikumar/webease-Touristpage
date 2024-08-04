"use client";
import { useAppDispatch } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { User } from "@/interfaces/interfaces";
import { updateUser } from "@/services/actions/client.services";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { setUser } from "@/lib/features/authSlice";

import LoadingAnimation from "../LoadingAnimation";
import GenderRadioButtons from "../GenderRadioButtons";

export default function SettingsForm({ user }: { user: any }) {
  const [editable, setEditable] = useState(false);
  const dispacher = useAppDispatch();

  const [formData, setFormData] = useState<any>(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const { data, error, isLoading, mutate } = useMutation<User>(updateUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate({
      id: user?._id,
      data: formData,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckBoxChange = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  useEffect(() => {
    if (data) {
      toast.success("Save successful");
      dispacher(setUser(data));
      setEditable(false);
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error, dispacher]);
  return (
    <div className="">
      <div className="flex justify-start">
        <h1 className="text-4xl mt-8 flex">
          <Icon icon={"uil:setting"} className="me-2" /> Settings
        </h1>
      </div>
      <div className="bg-white rounded-xl shadow-md flex mt-5 w-full">
        <div className="flex flex-col p-5 w-full">
          <form onSubmit={handleSubmit}>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold text-blue-400">
                  UserID
                </span>
              </label>
              <input
                type="text"
                placeholder="UserID"
                className="w-full h-10 rounded-lg"
                name="_id"
                required
                disabled
                value={formData?._id}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
              />
            </div>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2 text-blue-400">
                <span className="text-base font-bold">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                name="username"
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
                required
                value={formData?.username}
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold text-blue-400">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                required
                name="email"
                value={formData?.email}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
                disabled
              />
            </div>
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold text-blue-400">
                  Phone Number
                </span>
              </label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                required
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                disabled={!editable}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
              />
            </div>

            <GenderRadioButtons
              onCheckboxChange={handleCheckBoxChange}
              selectedGender={formData?.gender}
              disabled={!editable}
            />
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold text-blue-400">
                  Address
                </span>
              </label>
              <textarea
                placeholder="Enter your Address"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                required
                name="address"
                value={formData?.address}
                onChange={handleChange}
                disabled={!editable}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
              />
            </div>
            <div className="my-2">
              {editable && (
                <button
                  className="bg-blue-400 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
                  disabled={isLoading}
                >
                  Save
                  {isLoading && (
                    <span className="ms-2">
                      <LoadingAnimation />
                    </span>
                  )}
                </button>
              )}
            </div>
          </form>
          <div className="my-2">
            {editable ? (
              <button
                className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
                disabled={isLoading}
                onClick={() => setEditable(false)}
              >
                Cancel
              </button>
            ) : (
              <button
                className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
                disabled={isLoading}
                onClick={() => setEditable(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
