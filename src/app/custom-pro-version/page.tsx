"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import sendIcon from "../../../public/sendIcon.png";

const PremiumFeature = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const finalAnswer = answer.replace(/\*{1,2}/g, "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/ai-content", { question });
      toast.success("Got the response");
      setAnswer(response?.data?.result);
    } catch (error) {
      toast.error("Got error");
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col">
      {/* response div */}
      <div className="relative flex w-[60%] left-[20%] xl:gap-4 gap-2 justify-center items-center text-center">
        <TextGenerateEffect words={finalAnswer} />
      </div>
      {/* response div */}

      {/* search bar */}
      <div className="fixed bottom-8 left-0 w-full p-4">
        <form
          className="relative flex w-[60%] left-[20%] xl:gap-4 gap-2 justify-center items-center text-center"
          onSubmit={handleSubmit}
        >
          {/* input box for prompt */}
          <textarea
            placeholder="ask me anything related to mental health"
            className="border-2 border-blue-400 w-[70%] resize-none overflow-hidden p-2 rounded-xl"
            rows={1}
            style={{ whiteSpace: "pre-wrap" }}
            onChange={handleChange}
          />
          {/* input box for prompt */}
          {/* send icon */}
          <button type="submit" className="w-[40px]">
            <Image
              src={sendIcon}
              alt="sendIcon"
              className="relative flex hover:bg-slate-300 p-2 rounded-full"
            />
          </button>
          {/* send icon */}
        </form>
      </div>
      {/* search bar */}
    </div>
  );
};

export default PremiumFeature;
