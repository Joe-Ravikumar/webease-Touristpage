"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import LogOutButton from "../LogOutButton";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { logout } from "@/services/actions/auth.services";
import { clearUser } from "@/lib/features/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfileSidebar: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const user  = useAppSelector((state) => state.auth.user);
  const [client,setClient] = useState(null) as any;

  const dispacher = useAppDispatch();
  const { data, error, isLoading, mutate } = useMutation<Partial<any>>(logout);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      toast.success("Logout successful");
      dispacher(clearUser());
      router.push("/");
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  useEffect(() => {
    if (!user){
      mutate;
    }else{
      setClient(user);
    }
  }, [user]);

  return (
    <>
      {/* Mobile trigger */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 xl:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? "true" : "false"}
        aria-controls="nav-menu-4"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/* Side Navigation */}
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-blue-500 transition-transform xl:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="bg-[#002147] rounded-b-2xl flex flex-col items-center gap-4 p-6">
          <div className="shrink-0">
            <a
              href="#"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={client?.profilePic}
                alt={client?.username}
                title={client?.username}
                width="48"
                height="48"
                className="flex-none w-[48px] h-[48px] rounded-full object-cover"
              />
            </a>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
            <h4 className="w-full truncate text-lg text-slate-100 font-medium">
             {client?.username}
            </h4>
          </div>
        </div>
        <nav aria-label="side navigation" className="flex-1 overflow-auto">
          <div>
            <ul className="flex bg-blue-500 flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <a
                  href="/profile"
                  className="flex items-center gap-3 rounded p-3 text-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-500 "
                >
                  <div className="flex items-center self-center text-3xl">
                    <Icon icon="mdi:card-account-details-outline" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    General Info
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/profile/chat"
                  className="flex items-center gap-3 rounded p-3 text-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-500 "
                >
                  <div className="flex items-center self-center text-3xl">
                    <Icon icon="token:chat" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Your chats
                  </div>
                </a>
              </li>
              
              <li className="px-3">
                <a
                  href="/profile/feedback"
                  className="flex items-center gap-3 rounded p-3 text-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-500 "
                >
                  <div className="flex items-center self-center text-3xl">
                  <Icon icon="material-symbols:feedback-rounded" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    FeedBack
                  </div>
                </a>
              </li>
   
              <li className="px-3">
                <a href="/">
                  <div className="flex items-center gap-3 rounded p-3 text-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-500">
                    <div className="flex items-center text-3xl">
                      <Icon icon="ic:round-home" />
                    </div>
                    <span className=""> Back to Home</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="p-3 text-white">
            <div className="flex items-center gap-3 rounded p-3 text-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-500">
              <div className="flex items-center text-3xl">
                <Icon icon="pajamas:status-closed" />
              </div>
              <span className=""> Account Status</span>
            </div>
            <p className="p-3 mx-10 text-green-200 font-bold rounded-2xl">
              {user?.beautician?.isApproved.replaceAll("_", " ")}
            </p>
            <a href="/beautician/update-password">
              <div className="flex items-center gap-3 rounded p-3 text-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-500 focus:bg-blue-50 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-500">
                <div className="flex items-center text-3xl">
                  <Icon icon="ph:password-fill" />
                </div>
                <span className=""> Password Reset</span>
              </div>
            </a>
          </div> */}
        </nav>

        <footer className="bg-[#002147] p-3 rounded-t-2xl flex justify">
          <LogOutButton toggle={isSideNavOpen} />
        </footer>
      </aside>

      {/* Backdrop */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
};

export default ProfileSidebar;
