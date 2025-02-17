import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">Audio resources for mental health wellness</h1>
        {/* <audio controls className="w-full max-w-md bg-white shadow-lg rounded-lg p-2 border border-purple-300">
        <source src="/public/audio-clip1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> */}

       <div className="border border-green-400 p-2">
       <iframe
          width="720"
          height="480"
          src="https://www.youtube.com/embed/VgdAcENXy84?si=70mtdPQ5Y5Ahrzfa"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
       </div>

       <div className="relative flex border border-green-400 p-2 top-4">
       <iframe
          width="720"
          height="480"
          src="https://www.youtube.com/embed/CJIXbibQ0jI?si=cr8r3F2azhBbCRmb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
       </div>

        <p>
          If you're looking to store audio clips on cloud platforms and want to
          use a free plan, here are a few popular ones that offer free tiers:
        </p>
        <ul>
          <li>
            <strong>Google Drive</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 15 GB of storage for free.
              </li>
              <li>
                You can upload and store audio files, and access them from
                anywhere.
              </li>
              <li>
                If you exceed the free storage limit, you'll need to pay for
                additional space.
              </li>
            </ul>
          </li>
          <li>
            <strong>Dropbox</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 2 GB of storage.
              </li>
              <li>
                Dropbox provides easy-to-use file syncing and sharing, but the
                free tier has limited storage.
              </li>
            </ul>
          </li>
          <li>
            <strong>OneDrive (Microsoft)</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 5 GB of storage.
              </li>
              <li>
                OneDrive offers good integration with Microsoft Office apps, and
                the free plan provides basic file storage.
              </li>
            </ul>
          </li>
          <li>
            <strong>iCloud (Apple)</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 5 GB of storage.
              </li>
              <li>
                Ideal if you're in the Apple ecosystem and need to store your
                audio files for access across devices.
              </li>
            </ul>
          </li>
          <li>
            <strong>Box</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 10 GB of storage.
              </li>
              <li>
                Provides file storage and sharing, with some collaboration
                features as well.
              </li>
            </ul>
          </li>
          <li>
            <strong>Amazon S3 (AWS)</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 5 GB of standard storage for the
                first 12 months.
              </li>
              <li>
                Amazon S3 offers more flexibility and scalability, but you might
                need to upgrade after the free tier expires.
              </li>
            </ul>
          </li>
          <li>
            <strong>pCloud</strong>
            <ul>
              <li>
                <strong>Free Tier:</strong> 10 GB of storage.
              </li>
              <li>
                pCloud allows easy file sharing and management with the option
                to upgrade for more features and storage.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          These platforms are good for storing audio clips, with varying levels
          of storage and functionality. For larger audio collections or
          professional uses, you might need to consider paid options.
        </p>
      </div>
    </div>
  );
};

export default page;
