import type { Metadata } from "next";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
import CustomCursor from "@/components/Cursor/customCursor";

const mainFont = localFont({
  src: [
    {
      path: "../fonts/HelveticaNowDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

const secondFont = localFont({
  src: [
    {
      path: "../fonts/GT-Super-Display-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GT-Super-Display-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GT-Super-Display-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
  ],

  variable: "--second-font",
});

export const metadata: Metadata = {
  title: " Modern World",
  description: "Walk through the world with us",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth scroll-pt-[136px] ${secondFont.variable}`}>
      <body className={`${mainFont.className}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
