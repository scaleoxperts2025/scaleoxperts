import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@/components/SEO/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata() {
  return {
    title: "ScaleOXperts | Strategy & Management Consulting for MSMEs | Branding, Digital Transformation & Business Advisory",
    description:
      "ScaleOXperts is a strategy and management consulting firm that empowers MSMEs with expert business planning, branding, digital transformation, and advisory services. Trusted by startups and SMEs across India.",
    keywords: [
      "scaleoxperts",
      "digital marketing services",
      "sales consulting",
      "growth strategy",
    ],
    other: {
      "link:canonical": "https://scaleoxperts.com/",
    },
  };
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager/>
        {children}
      </body>
    </html>
  );
}
