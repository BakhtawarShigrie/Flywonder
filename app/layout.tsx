import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Fly Wonder Travel & Tours",
  description: "Best Travel Agency for Visa, Umrah, and Tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        {children} {/* Yahan se pt-20 hata diya gaya hei */}
      </body>
    </html>
  );
}