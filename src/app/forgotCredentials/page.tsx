"use client";

const forgotCredentials = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <button type="submit">Update password</button>
      </form>
    </div>
  );
};

export default forgotCredentials;
