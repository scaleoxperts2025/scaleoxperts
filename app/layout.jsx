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
    title: "ScaleOXperts | Business Consulting & Growth Strategy Firm",
    description:
      "ScaleOXperts provides strategy consulting, digital transformation consulting, and go-to-market strategy services to accelerate business growth. Book a call now!",
    keywords: [
      "Scaleoxperts",
      " strategy consulting",
      " digital transformation consulting",
      " go-to-market strategy services",
      " business consulting",
      " growth strategy firm"
    ],
    alternates: {
      canonical: "https://scaleoxperts.com/",
    }
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
