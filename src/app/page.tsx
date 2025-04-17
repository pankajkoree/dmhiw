"use client";

import Footer from "@/components/ui/Footer";
import textalImage from "../../public/textualimage.jpg"
import aiContent from "../../public/aicontent.png"
import Image from "next/image";

export default function Home() {

  return (
    <div className="relative flex flex-col justify-center items-center text-center gap-4">
      <h1 className="relative flex top-4 lg:top-12 xl:top-16 uppercase text-xl lg:text-4xl xl:text-5xl font-bold">
        Digital Mental Health Interventions and Wellness
      </h1>
      <h2 className="relative flex top-4 lg:top-12 xl:top-24 xl:text-3xl italic font-bold">
        Find your calm, anonymously. Explore deeper, personally
      </h2>
      <p className="relative flex top-4 xl:top-28 xl:text-2xl xl:w-[40%]">
        Discover a safe and anonymous space to explore mental health resources
        and begin your wellness journey. When you are ready for deeper insights
        and personalized guidance and unlock the pro version to connect your
        unique challenges with tailored information, all while maintaining the
        privacy you value
      </p>

      <div className="relative top-4 lg:top-12 xl:top-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 p-2 xl:p-0">
        {/* Card 1 - Video content route */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl">
          <h2 className="mt-2 text-lg font-semibold">Video route</h2>
          <iframe
            className="w-full rounded-lg"
            height="240"
            src="https://www.youtube.com/embed/kCQim9VrnDY"
            title="Dr. Laurie Santos' 5 Favorite Coping Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Dr. Laurie Santos' 5 Favorite Coping Tips</h3>
        </div>


        {/* Card 2 - Audio content route */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <h2 className="mt-2 text-lg font-semibold">Audio route</h2>
          <iframe
            className="w-full rounded-lg"
            height="175"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/436-facing-horrific-family-trauma-finding-joy-after/id1094120819?i=1000703163017"
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Facing Horrific Family Trauma & Finding Joy After Divorce</h3>
        </div>

        {/* Card 3 - Textual content route*/}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <h2 className="mt-2 text-lg font-semibold">Textual route</h2>
          <Image src={textalImage} alt="textalImage" className="w-full" height={100} />
          <h3 className="mt-2 text-lg font-semibold">Coping with anxiety is personal—what helps one person may not help another. It&apos;s about finding what calms you, whether that&apos;s running, yoga, or quiet meditation. Do what brings you peace..</h3>
        </div>

        {/* Card 4 - AI content route */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <h2 className="mt-2 text-lg font-semibold">Custom pro version route</h2>
          <Image src={aiContent} alt="aiContent" className="w-full h-[80px]" />
          <h3 className="mt-2 text-lg font-semibold">AI integration in mental health apps enables personalized support through mood tracking, chatbot therapy, and behavior insights. It enhances user experience by offering timely, data-driven recommendations.</h3>
        </div>


      </div>
      <div className="relative top-4 xl:top-36">
        <Footer />
      </div>
    </div>
  );
}
