"use client";

import { useState } from "react";
import userImage from "../../../public/user.png";
import Image from "next/image";

const ForgotCredentials = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle password reset logic here
  };

  return (
    <div className="relative flex justify-center xl:top-20">
      <div className="relative flex flex-col justify-center items-center border p-2 xl:w-[22%] gap-4 rounded-xl hover:border-green-300">
        <div className="relative flex flex-col justify-center items-center w-full top-4">
          <Image src={userImage} alt="user" className="xl:w-[60px]" />
          <p className="text-xl"> Enter your valid email to reset the password
          </p>
        </div>

        <form
          className="relative flex flex-col gap-2 p-2 text-xl xl:w-[90%] top-4"
          onSubmit={handleSubmit}
        >
          {/* email starts here */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
          {/* email ends here */}

          {/* passowrd starts here */}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />

          {/* password ends here */}

          {/* signup button starts here */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
          >
            Reset Password
          </button>

          {/* signup button ends here */}
        </form>
      </div>
    </div>
  );
};

export default ForgotCredentials;
