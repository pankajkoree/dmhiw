"use client";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

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

          <BackgroundBeams />

          <main className="relative z-10">{children}</main>

          <Toaster position="top-center" />
        </AuthProvider>

      </body>
    </html>
  );
}

// BackgroundBeams.tsx
import React, { ReactNode } from "react";

interface BackgroundBeamsProps {
  className?: string;
  children?: ReactNode;
}

const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export { BackgroundBeams };
