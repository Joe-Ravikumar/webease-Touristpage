"use client";
import React from "react";
import { useState } from "react";
import Button from "./button/Button";
import Login from "./login/Login";

const Navbar: React.FC = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="">
      <header className="border-b-1 z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden fixed">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-[1140px] 2xl:max-w-[1440px]">
          <nav
            aria-label="main navigation"
            className="flex h-[5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div className="flex items-center">
              <a
                id="WindUI"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                href="/"
              >
                WebEase
              </a>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
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
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#8781DB] focus:text-[#80BBFF] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="services"
                >
                  <span>Services</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#8781DB] focus:text-[#80BBFF] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/portfolio"
                >
                  <span>Destination</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#8781DB] focus:text-[#80BBFF] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="packages"
                >
                  <span>Packages</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#8781DB] focus:text-[#80BBFF] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/about"
                >
                  <span>About Us</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#8781DB] focus:text-[#80BBFF] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/contacts"
                >
                  <span>Contact Us</span>
                </a>
              </li>
              {/* <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#8781DB] focus:text-[#80BBFF] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>About Us</span>
                </a>
              </li> */}
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {/*        <!-- Avatar --> */}
              {/* <a
                href="#"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <img
                  src="https://i.pravatar.cc/40?img=35"
                  alt="user name"
                  title="user name"
                  width="40"
                  height="40"
                  className="max-w-full rounded-full"
                />
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                  <span className="sr-only"> 7 new emails </span>
                </span>
              </a> */}
              <div className="pr-8 flex items-center">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="12em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#80BBFF"
                      d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="lex items-center hidden xl:flex">
                <Button
                  btnText="Get Started"
                  border="none"
                  borderColor="white"
                  backgroundColor="#80BBFF"
                  fontColor="white"
                  click={handleLogin}
                />
              </div>
              {/*        <!-- End Avatar --> */}
            </div>
          </nav>
        </div>
        {showLogin && <Login onClose={handleCloseLogin} />}
      </header>
      {/*<!-- End Navbar with Avatar--> */}
    </div>
  );
};

export default Navbar;