"use client";

import Image from "next/image";
import userImage from "../../../public/user.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user/login", user)

      if (response.status === 200 && response.data.user) {
        toast.success("Login successful")
        router.push("/custom-pro-version")

      }
      else {
        toast.error("User not found")
      }
    } catch (error) {
      toast.error("Invalid credentials")
    }
  };

  const gotoSignup = () => {
    router.push("/signup");
  };

  const gotoForgot = () => {
    router.push("/ForgotCredentials");
  };

  return (
    <div className="relative flex justify-center xl:top-20">
      <div className="relative flex flex-col justify-center items-center border p-2 xl:w-[22%] gap-4 rounded-xl hover:border-green-300">
        <div className="relative flex flex-col justify-center items-center w-full top-4">
          <Image src={userImage} alt="user" className="xl:w-[60px]" />
          <p className="text-xl">Login</p>
        </div>

        <form
          className="relative flex flex-col gap-2 p-2 text-xl xl:w-[90%] top-4"
          onSubmit={handleSubmit}
        >
          {/* email starts here */}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={user.email}
            className="relative flex h-[40px] border rounded-sm"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          {/* email ends here */}

          {/* passowrd starts here */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            className="relative flex h-[40px] border rounded-sm"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          {/* password ends here */}

          {/* signup button starts here */}
          <button
            type="submit"
            className="border-2 p-2 bg-blue-500 mt-3 hover:bg-green-600 text-white transition-all duration-500 ease-in-out rounded-sm"
          >
            Login
          </button>
          {/* signup button ends here */}

          <button
            className="text-sm hover:scale-105 hover:text-red-600 transition-all duration-500 ease-in-out"
            onClick={gotoForgot}
          >
            Forget username/password?
          </button>

          <button className="text-sm mb-4">
            Don't have an account?{" "}
            <span
              className="text-gray-600 font-bold underline hover:text-green-300"
              onClick={gotoSignup}
            >
              Signup
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
