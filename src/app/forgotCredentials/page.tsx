"use client";

const forgotCredentials = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>Please enter your valid email to reset your password</p>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};

export default forgotCredentials;
