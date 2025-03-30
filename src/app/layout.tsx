"use client";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";


interface BackgroundBeamsProps {
  className?: string;
  children?: React.ReactNode;
}

const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic"
          rel="stylesheet"
        />
      </head>
      <body className="font-aptos">
        <AuthProvider>

          <BackgroundBeams>{children}

            <Toaster position="top-center" />
          </BackgroundBeams>
        </AuthProvider>

      </body>
    </html>
  );
}
