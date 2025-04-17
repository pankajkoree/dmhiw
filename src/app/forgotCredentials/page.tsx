"use client";

import { useState } from "react";

const forgotCredentials = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    <div>
      <p>Please enter your valid email to reset your password</p>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};

export default forgotCredentials;
