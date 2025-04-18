'use client'

import Image from "next/image";
import React, { useState } from "react";
import textualImage1 from "../../../public/textualImage1.png";
import textualImage2 from "../../../public/textualImage2.png";
import textualImage3 from "../../../public/textualImage3.png";
import textualImage4 from "../../../public/textualImage4.png";
import textualImage5 from "../../../public/textualImage5.png";
import textualImage6 from "../../../public/textualImage6.png";
import textualImage7 from "../../../public/textualImage7.png";
import textualImage8 from "../../../public/textualImage8.png";

type CardType = {
  title: string;
  link: string;
  image: any;
};

const cards: CardType[] = [
  {
    title: "Foods That Help Tame Stress",
    link: "https://www.webmd.com/diet/ss/slideshow-diet-for-stress-management",
    image: textualImage1,
  },
  {
    title: "Eight Free Resources for Mental Health Support",
    link: "https://www.recoveryunplugged.com/eight-free-resources-for-mental-health-support/",
    image: textualImage2,
  },
  {
    title: "Best Mental Health Websites of 2024 – Ideas and Inspiration",
    link: "https://squarestash.com/inspiration/mental-health-websites/",
    image: textualImage3,
  },
  {
    title: "Best Websites For Mental Health",
    link: "https://garrettcounseling.com/10-best-websites-for-mental-health/",
    image: textualImage4,
  },

  {
    title: "16 Simple Ways to Relieve Stress",
    link: "https://www.healthline.com/nutrition/16-ways-relieve-stress-anxiety",
    image: textualImage5,
  },

  {
    title: "Finding The Best Anxiety Podcast To Help Manage Health & Anxiety Symptoms",
    link: "https://www.betterhelp.com/advice/anxiety/finding-the-best-anxiety-podcast-to-relieve-stress-and-anxiety/",
    image: textualImage6,
  },

  {
    title: "17 Best Mental Health Podcasts Recommended by Therapists",
    link: "https://www.vogue.com/article/best-mental-health-podcasts",
    image: textualImage7,
  },

  {
    title: "Crisis resources about your mental health",
    link: "https://mhanational.org/resources/",
    image: textualImage8,
  },
];

const Textual: React.FC = () => {
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div>
        <h1 className="relative flex xl:text-4xl top-4">Textual resources</h1>
      </div>

      <div>
        <div className="relative top-4 xl:top-8 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center p-2 xl:p-0">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(card)}
              className="w-full max-w-[600px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 border border-green-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl hover:cursor-pointer"
            >
              <Image
                src={card.image}
                alt={`textualImage-${index}`}
                className="w-full rounded-lg h-[240px] object-cover"
              />
              <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {activeCard && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="relative w-[80%] h-[90%] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl z-10"
            >
              ×
            </button>

            {/* Load the website inside an iframe */}
            <iframe
              src={activeCard.link}
              title={activeCard.title}
              className="w-full h-full border-none"
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Textual;
