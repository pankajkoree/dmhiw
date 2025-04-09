import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <h1 className="uppercase text-3xl">Digital Mental Health Interventions and Wellness</h1>
      <h2 className="text-xl">Find your calm, anonymously. Explore deeper, personally</h2>
      <p className="xl:w-[40%]">Discover a safe and anonymous space to explore mental health resources  and begin your wellness journey. When you're ready for deeper insights  and personalized guidance, unlock the pro version to connect your unique challenges  with tailored information, all while maintaining the privacy you value</p>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
