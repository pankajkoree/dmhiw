import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center text-4xl">
      <h1>Landing page</h1>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
