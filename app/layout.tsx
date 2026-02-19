import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const galafera = localFont({
  src: "../public/assets/galafera-font/GalaferaMedium-V4xze.ttf",
  variable: "--font-galafera",
});

export const metadata: Metadata = {
  title: "Zinhle Glamour Studio",
  description: "Your premier destination for hair and beauty services.",
  icons: {
    icon: "/assets/Zinhle-Favicon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${galafera.variable} antialiased`}
      >
        <SmoothScroll />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
