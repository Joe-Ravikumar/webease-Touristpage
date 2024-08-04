"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  tel: string;
  message: string;
  errors: {
    name: string;
    email: string;
    tel: string;
    message: string;
  };
  submissionStatus: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    tel: "",
    message: "",
    errors: {
      name: "",
      email: "",
      tel: "",
      message: "",
    },
    submissionStatus: ""
  });

  const validateInput = (name: string, value: string): string => {
    let error = "";
    switch (name) {
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "tel":
        if (!value) {
          error = "Telephone number is required";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Telephone number is invalid";
        }
        break;
      case "message":
        if (!value) {
          error = "Message is required";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { name, email, tel, message } = formData;
    const errors = {
      name: validateInput("name", name),
      email: validateInput("email", email),
      tel: validateInput("tel", tel),
      message: validateInput("message", message)
    };

    setFormData((prevState) => ({ ...prevState, errors }));

    if (!Object.values(errors).some((error) => error !== "")) {
      emailjs
        .sendForm(
          "service_ixsgzrg",
          "template_e5qjvmp",
          e.currentTarget,
          "qGOgpZPc-HUfCxxi8"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            setFormData({
              name: "",
              email: "",
              tel: "",
              message: "",
              errors: {
                name: "",
                email: "",
                tel: "",
                message: ""
              },
              submissionStatus: "success"
            });
            setTimeout(() => {
              setFormData((prevState) => ({
                ...prevState,
                submissionStatus: ""
              }));
            }, 6000); // Hide status after 6 seconds
          },
          (error) => {
            console.log("Failed to send the email:", error.text);
            setFormData((prevState) => ({
              ...prevState,
              submissionStatus: "error"
            }));
            setTimeout(() => {
              setFormData((prevState) => ({
                ...prevState,
                submissionStatus: ""
              }));
            }, 6000); // Hide status after 6 seconds
          }
        );
    }
  };

  return (
    <div className="relative flex items-top justify-center items-center  bg-transparent  sm:items-center sm:pt-0 mx-4 md:mx-0 mb-8">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 p-5">
            <div className="p-6 md:mr-2 bg-gray-400 w-full  sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-[aliceblue]  font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-[white] mt-2 ">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-[white]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[white]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold">
                  WebEase Solution, Colombo Fort, Sri Lanka
                </div>
              </div>

              <div className="flex items-center mt-4 text-[white] border-zinc-50">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[white]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-full">
                  <div>+94 71 535 1014</div>
                </div>
              </div>

              <div className="flex items-center mt-2 text-[white]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[white]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  webEasetourist@gmail.com
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 flex flex-col justify-center"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400  font-semibold focus:border-indigo-500 focus:outline-none"
                />
                <p className="error">{formData.errors.name}</p>
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400  font-semibold focus:border-indigo-500 focus:outline-none"
                />
                <p className="error">{formData.errors.email}</p>
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  value={formData.tel}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400  font-semibold focus:border-indigo-500 focus:outline-none"
                />
                <p className="error">{formData.errors.tel}</p>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message Here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400  font-semibold focus:border-indigo-500 focus:outline-none"
                />
                <p className="error">{formData.errors.message}</p>
              </div>

              <button
                type="submit"
                className="md:w-32 bg-gray-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Submit
              </button>
              {formData.submissionStatus === "success" && (
                <p className="text-green-500 pt-2">Email sent successfully!</p>
              )}
              {formData.submissionStatus === "error" && (
                <p className="text-red-500 pt-2">
                  Failed to send the email. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
