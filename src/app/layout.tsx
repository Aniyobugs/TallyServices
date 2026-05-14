import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import NoiseOverlay from "@/components/NoiseOverlay";

export const metadata: Metadata = {
  title: "Tally Prime Solutions1",
  description:
    "A premium design-led studio for Tally Prime implementations, cloud systems, customization, and operating workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans antialiased selection:bg-[#ff4d00] selection:text-white">
        <NoiseOverlay />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
