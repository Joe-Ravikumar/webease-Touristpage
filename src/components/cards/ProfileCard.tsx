"use client";
import Image from "next/image";
import { useState } from "react";
import ModelLayout from "@/components/layout/ModelLayout";
import ChangeProfilePic from "../popup/ChangeProfilePic";

export default function ProfileCard({ user }: { user: any }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <ModelLayout
        show={show}
        close={() => setShow(false)}
        title={"CHANGE PROFILE PICTURE"}
      >
        <ChangeProfilePic user={user} close={() => setShow(false)} />
      </ModelLayout>
      <div className="flex justify-start">
        <h1 className="text-4xl mt-8">Profile</h1>
      </div>
      <div className="bg-white rounded-xl shadow-md flex mt-5 w-full">
        <div className="flex justify-center p-5">
          <Image
            src={user?.profilePic}
            width={200}
            height={200}
            alt={user?.username ?? "profile"}
            unoptimized
            className="ms-2 flex-none w-[200px] h-[200px] rounded-full border-8 border-slate-300 object-cover"
          />

          <div className="ms-4">
            <h2 className="m-2 text-3xl font-bold">{user?.username}</h2>
            <p className="ms-2 flex-col">
              <span className="text-xl text-blue-700">{user?.email}</span>
              <br />
              <span className="text-xl">{user?.phone}</span>
              <br />
              <span className="text-xl">{user?.address}</span>
            </p>
            <button
              className="bg-blue-600 w-50 text-white p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
              onClick={() => setShow(true)}
            >
              change profile picture
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
