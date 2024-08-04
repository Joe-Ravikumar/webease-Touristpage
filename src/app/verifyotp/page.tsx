"use client";
import React, {
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useMutation from "@/hooks/useMutation";
import { clearUserIdForVerification, setUser } from "@/lib/features/authSlice";
import { storeUserData } from "@/utils/secureStorage";
import toast from "react-hot-toast";
import LoadingAnimation from "@/components/LoadingAnimation";
import { verifyOtp } from "@/services/actions/auth.services";

const VerifyOTP = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const otpBoxReference = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();

  const dispacher = useAppDispatch();
  const userID = useAppSelector((state) => state.auth.userIdForVerification);

  const { data, error, isLoading, mutate } = useMutation<any>(verifyOtp);

  const getOtpString = () => {
    return otp.join("");
  };
  

  const handleSubmit = async () => {
    console.log(userID, getOtpString());
    await mutate({
      userID: userID,
      otp: getOtpString(),
    });
  };

  useEffect(() => {
    if (data) {
      toast.success("logdedin successful");
      dispacher(setUser(data));
      storeUserData("user", data);
      setOtp(new Array(6).fill(""));
      dispacher(clearUserIdForVerification());
      router.push(data.role === "admin" ? "/dashboard" : "/profile");
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
          Verification <span className="text-blue-600">webease</span>
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
        <button
          className="bg-blue-600 text-white w-full p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Verify OTP
          {isLoading && (
            <span className="ms-2">
              <LoadingAnimation />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
