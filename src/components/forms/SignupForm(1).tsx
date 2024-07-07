import React, { useState, ChangeEvent, FormEvent, Dispatch } from "react";

interface FormData {
  email: string;
  password: string;
}

const SignupForm: React.FC<{ setShowLoginForm: (val: boolean) => void }> = ({
  setShowLoginForm,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Submit logic here...
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  // Remove the following line
  // onCloseLoginForm();

  return (
    <div>
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#80BBFF]">
        Create your account
      </h2>
      {/* Add your form fields and submit button here */}

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#80BBFF] focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#80BBFF] focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#80BBFF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#80BBFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </form>
        <div className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            className="font-semibold leading-6 text-[#80BBFF] hover:text-[#80BBFF]"
            onClick={(e) => {
              setShowLoginForm(true);
            }}
          >
            Sign in now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
