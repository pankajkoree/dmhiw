"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!words) return; // Prevent running animation on empty words

    animate("span", { opacity: 0, filter: "blur(10px)" }, { duration: 0 }); // 👈 Reset animation first

    setTimeout(() => {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration: duration, delay: (i) => i * 0.2 }
      );
    }, 50); // 👈 Slight delay ensures animation resets before restarting
  }, [words]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {words.split(" ").map((word, idx) => (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
