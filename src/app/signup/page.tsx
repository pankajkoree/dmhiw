"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import userImage from "../../../public/user.png";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    password: "",
  })
  useEffect(() => {
    if (user.password && user.confirmPassword && user.password === user.confirmPassword) {
      setNewUserData({
        username: user.username,
        email: user.email,
        password: user.password,
      });
    }
  }, [user]);

  const [error, setError] = useState("")

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setUser({ ...user, confirmPassword })

    if (confirmPassword !== user.password) {
      setError("Passwords do not match")
    } else {
      setError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user)
    console.log(newUserData)
    try {
      const response = await axios.post("/api/user/signup", newUserData)
      toast.success("Successfully signed up")
      router.push("/login")
    } catch {
      toast.error("Signup failed")
    }
  };

  const gotoLogin = () => {
    router.push("/login");
  };

  return (
    <div className="relative flex justify-center xl:top-20">
      <div className="relative flex flex-col justify-center items-center border p-2 xl:w-[22%] gap-4 rounded-xl hover:border-green-300">
        <div className="relative flex flex-col justify-center items-center w-full top-4">
          <Image src={userImage} alt="user" className="xl:w-[60px]" />
          <p className="text-xl">Create your account</p>
        </div>

        <form
          className="relative flex flex-col gap-2 p-2 text-xl xl:w-[90%] top-4"
          onSubmit={handleSubmit}
        >
          {/* username starts here */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            className="relative flex h-[40px] border rounded-sm"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          {/* username ends here */}

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
          <label htmlFor="cnfpassword">Confirm password</label>
          <input
            type="password"
            id="cnfpassword"
            value={user.confirmPassword}
            className="relative flex h-[40px] border rounded-sm"
            onChange={handleConfirmPassword}
          />
          <h1 className="text-sm text-red-500">{error}</h1>
          {/* password ends here */}

          {/* signup button starts here */}
          <button
            type="submit"
            className="border-2 p-2 bg-blue-500 mt-3 hover:bg-green-600 text-white transition-all duration-500 ease-in-out rounded-sm"
          >
            Signup
          </button>
          {/* signup button ends here */}

          <button className="text-sm mb-4" onClick={gotoLogin}>
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
