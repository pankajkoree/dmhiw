import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <h1 className="uppercase text-3xl">Digital Mental Health Interventions and Wellness</h1>
      <h2 className="text-xl">Find your calm, anonymously. Explore deeper, personally</h2>
      <p className="xl:w-[40%]">Discover a safe and anonymous space to explore mental health resources  and begin your wellness journey. When you are ready for deeper insights  and personalized guidance and  unlock the pro version to connect your unique challenges  with tailored information, all while maintaining the privacy you value</p>


      <HoverEffect items={datas} />
    </div>


  );
}


export const datas = [

  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  }
]