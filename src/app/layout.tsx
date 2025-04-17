import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "react-hot-toast";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic&display=optional"
          rel="stylesheet"
        />
      </head>
      <body>
        <BackgroundBeams />
        <main className="relative z-10">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}