import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { User } from "@/interfaces/interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import GenderRadioButtons from "../GenderRadioButtons";
import LoadingAnimation from "../LoadingAnimation";
import toast from "react-hot-toast";
import { updateUser } from "@/services/actions/client.services";
import { setSelectedClien, toggleEditable } from "@/lib/features/clientSlice";

export default function ClientDetails({ refetch }: { refetch: () => void }) {
  const selectedClient = useAppSelector(
    (state) => state.client?.selectedClient
  );
  const editable = useAppSelector((state) => state.client?.editable);
  const dispacher = useAppDispatch();

  const [formData, setFormData] = useState<any>(selectedClient);

  const { data, error, isLoading, mutate } = useMutation<User>(updateUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate({
      id: selectedClient?._id,
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
      dispacher(setSelectedClien(data));
      dispacher(toggleEditable(false));
      refetch();
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error, dispacher]);

  return (
    <div className="lg:w-[900px] sm:w-full">
      <div className="flex p-4">
        <div className="flex-1">
          <Image
            src={selectedClient?.profilePic}
            width={200}
            height={200}
            alt={selectedClient?.username ?? ""}
            unoptimized
            className="ms-2 flex-none w-[200px] h-[200px] rounded-full border-8 border-slate-300 object-cover"
          />
          <h2 className="m-2 text-2xl">{selectedClient?.username}</h2>
          <p className="ms-2 flex-col">
            <span className="text-xl text-blue-700">
              {selectedClient?.email}
            </span>
            <br />
            <span className="text-xl">{selectedClient?.phone}</span>
            <br />
            <span className="text-xl">{selectedClient?.address}</span>
          </p>
          <div className="flex mx-3 gap-4">
            <button
              className="bg-blue-600 w-50 text-white p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
              onClick={() => dispacher(toggleEditable(!editable))}
            >
              {editable ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold">UserID</span>
              </label>
              <input
                type="text"
                placeholder="UserID"
                className="w-full h-10 rounded-lg"
                name="_id"
                required
                disabled
                value={formData._id}
                onChange={handleChange}
              />
            </div>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
            <div className="my-1">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold">User Role</span>
              </label>
              <input
                type="text"
                placeholder="User Role"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
            <GenderRadioButtons
              onCheckboxChange={handleCheckBoxChange}
              selectedGender={formData.gender}
              disabled={!editable}
            />
            <div className="my-2">
              <label htmlFor="label" className="label ps-0 p-2">
                <span className="text-base font-bold">Address</span>
              </label>
              <textarea
                placeholder="Enter your Address"
                className={`w-full rounded-lg h-10 ${
                  editable ? "bg-slate-200" : ""
                } `}
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
            <div className="my-2">
              {editable && (
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
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
