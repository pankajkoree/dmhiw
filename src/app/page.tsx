import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <h1 className="uppercase text-3xl">Digital Mental Health Interventions and Wellness</h1>
      <h2 className="text-xl">Find your calm, anonymously. Explore deeper, personally</h2>
      <p className="xl:w-[40%]">Discover a safe and anonymous space to explore mental health resources  and begin your wellness journey. When you are ready for deeper insights  and personalized guidance and  unlock the pro version to connect your unique challenges  with tailored information, all while maintaining the privacy you value</p>


      <HoverEffect items={data} />
    </div>


  );
}


export const data: {
  title: string;
  description: string;
  link: string;
  media?: {
    type: "image" | "youtube" | "audio";
    src: string;
  };
}[] = [
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
      media: {
        type: "image",
        src: "https://media.assettype.com/analyticsinsight%2F2024-07%2Fbadae94c-adaf-4b11-bdda-d8c61631d1ff%2FThe_Latest_Innovations_That_Meta_Has_Come_Up_with_in_2022_1.jpg",
      },
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
      media: {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=AOHT-YiOeQA&ab_channel=TherapyinaNutshell",
      },
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
      media: {
        type: "audio",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
      media: {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      },
    },
  ];

