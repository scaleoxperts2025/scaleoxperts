import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ScaleoXperts | Digital Marketing Agency | Growth Strategy Experts",
  description:
    "ScaleoXperts provides tailored digital marketing services, sales consulting, and strategic growth solutions. Helping startups grow with 360° tailored solutions.",
  keywords: [
    "scaleoxperts",
    "digital marketing services",
    "sales consulting",
    "growth strategy",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
