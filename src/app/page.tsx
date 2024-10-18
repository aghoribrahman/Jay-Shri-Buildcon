"use client"

import { useEffect, useState } from "react";
import Blogs from "@/components/blogs";
import Carousel from "@/components/carousel";
import CtaMultiple from "@/components/cta-multiple";
import Discover from "@/components/discover";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import PageMarquee from "@/components/page-marquee";
import Pricing from "@/components/pricing";
import SingleCta from "@/components/single-cta";
import Tools from "@/components/tools";
import { UserForm } from '@/components/ui/form';

export default function Home() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // Show scroll up button if scrolled down
    setShowScrollUp(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <PageMarquee />
      <Discover />
      <CtaMultiple />
      <Features />
      <Pricing />
      <Tools />
      <Carousel />
      <Faq />
      <Blogs />
      <SingleCta />
      <UserForm />

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button 
        className="fixed bottom-8 right-8 bg-yellow-700 hover:bg-indigo-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      )}
    </>
  );
}