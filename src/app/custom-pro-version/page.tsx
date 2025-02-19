"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PremiumFeature = () => {
  const [question, setQuestion] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const getResonseFromAI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/ai-content", { question });
      toast.success("got the response");
      console.log(response.data.result);
    } catch (error) {
      toast.error("got error");
      console.log(error);
    }
  };
  return (
    <div className="relative flex left-8">
      <form onSubmit={getResonseFromAI}>
        <label htmlFor="question">Enetr the prompt</label>
        <br />
        <br />
        <input
          type="text"
          className="border border-green-400 p-2 w-[400px]"
          onChange={handleChange}
        />

        <br />
        <br />
        <button
          className="px-8 py-4 border border-blue-500 hover:border-none hover:bg-green-500 hover:text-white text-xl"
          type="submit"
        >
          Get response
        </button>
      </form>
    </div>
  );
};

export default PremiumFeature;
