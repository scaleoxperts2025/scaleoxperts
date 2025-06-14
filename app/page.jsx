"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Hero,
  About,
  Services,
  Team,
  Testimonials,
  FAQ,
  ContactSection,
  CTA,
} from '@/components/home';

import { WhatsAppButton } from '@/components/shared';
import { NavBar, Footer } from "@/components/layout";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const searchParams = useSearchParams();

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  const scrollToContactUs = () => {
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  useEffect(() => {
    if (searchParams.get("scroll") === "aboutus") {
      setTimeout(scrollToAboutUs, 100);
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("scroll") === "contactus") {
      setTimeout(scrollToContactUs, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pb-[2rem] bg-white relative overflow-hidden">
      <WhatsAppButton />
      <div className="relative z-10">
        <section className="bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
          <NavBar />
          <Hero />
        </section>

        <About ref={aboutUsRef} />
        <Services />
        <Team />
        <Testimonials />
        <FAQ />
        <ContactSection ref={contactUsRef} />
        <CTA />

        <footer className="max-w-[80rem] mx-auto">
          <Footer />
          <p className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 w-full overflow-hidden whitespace-nowrap" style={{ fontSize: "min(13vw)" }}>
            Scaleoxperts
          </p>
        </footer>
      </div>
    </div>
  );
}