"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import user from "../../../public/user.png";

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
        <div className="relative flex flex-col justify-center items-center w-full top-4">
          <Image src={user} alt="user" className="xl:w-[60px]" />
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
          <button
            type="submit"
            className="border-2 p-2 bg-blue-500  hover:bg-green-500 text-white"
          >
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
