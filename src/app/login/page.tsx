"use client";

import Image from "next/image";
import user from "../../../public/user.png";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const gotoSignup = () => {
    router.push("/signup");
  };

  const gotoForgot = () => {
    router.push("/gotoForgot");
  };

  return (
    <div className="relative flex justify-center xl:top-20">
      <div className="relative flex flex-col justify-center items-center border p-2 xl:w-[22%] gap-4 rounded-xl hover:border-green-300">
        <div className="relative flex flex-col justify-center items-center w-full top-4">
          <Image src={user} alt="user" className="xl:w-[60px]" />
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
            className="relative flex h-[40px] border rounded-sm"
          />
          {/* email ends here */}

          {/* passowrd starts here */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="relative flex h-[40px] border rounded-sm"
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
