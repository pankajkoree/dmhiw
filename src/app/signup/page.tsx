"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Signup = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello");
  };

  const gotoLogin = () => {
    router.push("/login");
  };

  return (
    <div className="relative flex justify-center xl:top-20">
      <div className="relative flex flex-col justify-center items-center border p-2 xl:w-[25%] gap-4 rounded-xl">
        <div>
          <h2 className="text-3xl">Signup form</h2>
          <p className="text-xl">Create your account</p>
        </div>

        <form
          className="relative flex flex-col gap-2 p-2 text-xl xl:w-[90%]"
          onSubmit={handleSubmit}
        >
          {/* username starts here */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="relative flex h-[36px] border rounded-xl"
          />
          {/* username ends here */}

          {/* email starts here */}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="relative flex h-[36px] border rounded-xl"
          />
          {/* email ends here */}

          {/* passowrd starts here */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="relative flex h-[36px] border rounded-xl"
          />
          <label htmlFor="cnfpassword">Confirm password</label>
          <input
            type="password"
            id="cnfpassword"
            className="relative flex h-[36px] border rounded-xl"
          />
          {/* password ends here */}

          {/* signup button starts here */}
          <button type="submit" className="border p-2">
            Signup
          </button>
          {/* signup button ends here */}

          <button className="text-sm" onClick={gotoLogin}>
            Already have an account?{" "}
            <span className="text-gray-600 font-bold underline hover:text-green-300">
              Login
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
