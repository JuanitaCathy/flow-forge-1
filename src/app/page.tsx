"use client";

import { CallToAction } from "@/components/landing-page/CallToAction";
import { FAQs } from "@/components/landing-page/FAQs";
import { Features } from "@/components/landing-page/Features";
import { Footer } from "@/components/landing-page/Footer";
import { Hero } from "@/components/landing-page/Hero";
import { LogoTicker } from "@/components/landing-page/LogoTicker";
import { Navbar } from "@/components/landing-page/Navbar";
import { ProductShowcase } from "@/components/landing-page/ProductShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
