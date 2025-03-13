"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic"
          rel="stylesheet"
        />
      </head>
      <body className="font-aptos">
        <BackgroundBeams>{children}</BackgroundBeams>
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
