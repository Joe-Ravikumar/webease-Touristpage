import React, { useState, useRef, useEffect } from "react";
import LoginForm from "../forms/LoginFrom";
import SignupForm from "../forms/SignupForm";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const loginRef = useRef<HTMLDivElement>(null);

  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        loginRef.current &&
        !loginRef.current.contains(event?.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginRef, onClose]);

  return (
    <div>
      <div className="absolute flex h-[100vh] w-[100vw] left-0 flex-1 flex-col justify-center items-center bg-gray-900 bg-opacity-50 mt-[-80px]">
        <div
          className="md:flex bg-[white] drop-shadow-md rounded-xl transform hover:scale-103 duration-300 hover:shadow-lg lg:w-[900px] w-[90vw] mx-4"
          ref={loginRef}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-md bg-[#80BBFF] rounded-l-xl left-0 md:flex justify-center hidden">
            <img
              src="/assets/images/characters/girl.webp"
              alt=""
              className="xl:h-[80vh] 2xl:h-auto w-auto"
            />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center p-8">
            {showLoginForm && <LoginForm setShowLoginForm={setShowLoginForm} />}
            {!showLoginForm && (
              <SignupForm setShowLoginForm={setShowLoginForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
