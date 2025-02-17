import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Mental health video resources</h1>

        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/MFyEwdpC5pM?si=WvrvWpkJ4crROs1P"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;
