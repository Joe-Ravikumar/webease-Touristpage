"use client";
import { useAppDispatch } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { clearUser } from "@/lib/features/authSlice";
import { logout } from "@/services/actions/auth.services";
import { removeUserData } from "@/utils/secureStorage";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function LogOutButton({ toggle }: { toggle: boolean }) {
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

  return (
    <button
      className="flex items-center gap-3 rounded p-3 text-slate-100 transition-colors hover:text-blue-300 "
      onClick={mutate}
      disabled={isLoading}
    >
      <div className="flex items-center self-center text-3xl">
        <Icon icon="hugeicons:logout-04" />
      </div>
      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium ">
        <span
          className={`transition-all duration-300 ${
            toggle ? "hidden" : "block"
          } ms-2 mt-1 p-0 `}
        >
          Logout{isLoading && "..."}
        </span>
      </div>
    </button>
  );
}
