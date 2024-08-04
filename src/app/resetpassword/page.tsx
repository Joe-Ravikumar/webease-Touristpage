"use client";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { clearUserIdForVerification } from "@/lib/features/authSlice";
import { resetPasswordByOtp } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useRef, useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const otpBoxReference = useRef<(HTMLInputElement | null)[]>([]);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const userID = useAppSelector((state) => state.auth.userIdForVerification);

  const dispacher = useAppDispatch();

  const { data, error, isLoading, mutate } =
    useMutation<any>(resetPasswordByOtp);

  const getOtpString = () => {
    return otp.join("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userID, getOtpString());
    await mutate({
      userID: userID,
      otp: getOtpString(),
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    });
  };

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      setOtp(new Array(6).fill(""));
      dispacher(clearUserIdForVerification());
      router.push("/login");
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpBoxReference.current[index + 1]?.focus();
    }
  };

  const handleBackspaceAndEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]?.focus();
    }
    if (e.key === "Enter" && e.currentTarget.value && index < 5) {
      otpBoxReference.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">
          <span className="text-blue-600">webease</span>
        </h1>
        <div className="flex items-center gap-4 p-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value, index)
              }
              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
                handleBackspaceAndEnter(e, index)
              }
              ref={(ref) => (otpBoxReference.current[index] = ref)}
              className={`border-2 w-10 p-3 rounded-lg focus:border-2 focus:outline-double`}
              required
            />
          ))}
        </div>
        <form onSubmit={handleSubmit} method="post">
          <div className="pb-2">
            <label htmlFor="label" className="label py-2">
              <span className="text-base label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-full input input-bordered h-10 border border-gray-300 rounded-lg px-2 focus:border-[#1E88E5] focus:outline-none"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="pb-2">
            <label htmlFor="label" className="label py-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 border border-gray-300 rounded-lg px-2 focus:border-[#1E88E5] focus:outline-none"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
            type="submit"
            disabled={isLoading}
          >
            Reset Password
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

export default ResetPassword;
