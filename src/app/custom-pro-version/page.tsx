"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import sendIcon from "../../../public/sendIcon.png";
import questionIcon from "../../../public/question.png";

const PremiumFeature = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const finalAnswer = answer.replace(/\*{1,2}/g, "");
  const [loading, setLoading] = useState(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast.error("No question found...");
      return;
    }

    setQuestion(inputValue);
  };

  useEffect(() => {
    if (!question) return;
    const getResponse = async () => {
      try {
        const response = await axios.post("/api/ai-content", { question });
        toast.success("Got the response");
        setAnswer(response?.data?.result);
      } catch (error) {
        console.log(error);
      }
    };

    getResponse();
  }, [question]);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="relative flex justify-center text-2xl">
          <TextGenerateEffect words="welcome to premium feature" />
        </div>
      ) : (
        <div className="relative flex flex-col">
          {/* response div */}
          <div className="relative flex flex-col w-[60%] left-[20%] xl:gap-4 gap-2 justify-center">
            {/* to display something when question is not there */}
            {!question && <Image src={questionIcon} alt="questionIcon" className="relative w-[80px]" />}
            {/* to display something when question is not there */}

            {question && (
              <div className="relative flex gap-2">
                <Image
                  src={questionIcon}
                  alt="questionIcon"
                  className="relative w-[32px]"
                />
                <h1 className="relative flex left-0 text-2xl">{question}</h1>
              </div>
            )}

            {answer && <TextGenerateEffect words={" 👉 " + finalAnswer} />}
          </div>
          {/* response div */}

          {/* search bar */}
          <div className="fixed bottom-4 left-0 w-full p-4">
            <form
              className="relative flex w-[80%] left-[10%] gap-2 justify-center items-center text-center"
              onSubmit={handleSubmit}
            >
              {/* input box for prompt */}
              <textarea
                placeholder="ask me anything related to mental health"
                className="border-2 border-blue-400 w-[70%] resize-none overflow-hidden p-2 rounded-xl hover:border-green-400"
                rows={1}
                style={{ whiteSpace: "pre-wrap" }}
                onChange={handleInputChange}
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

          {/* disclaimer starts here */}
          <div className="fixed bottom-0 left-0 w-full text-center">
            <p className="relative flex w-[50%] left-[25%] justify-center text-[10px] text-slate-400">
              Custom AI generated responses couldn&apos;t be completely accurate and
              useful. We humbly request and appreciate your patience and
              understanding. We are improving and Hope to have your feedback for
              better future response.
            </p>
          </div>
          {/* disclaimer starts here */}
        </div>
      )}
    </div>



  );
};

export default PremiumFeature;