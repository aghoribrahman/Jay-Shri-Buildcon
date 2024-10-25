"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

// Define the type for the props that PageMarquee will accept
interface Logo {
  img: string;
}

interface PageMarqueeProps {
  images: Logo[]; // Accept an array of logo objects
}

const LogoCard = ({ img }: { img: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // State to manage zoom in/out
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom state on click
  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <motion.figure
      ref={ref}
      className={cn(
        "flex relative w-64 cursor-pointer overflow-hidden items-center justify-center rounded-xl p-4 dark:bg-transparent"
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={handleClick} // Add click handler
    >
      <div className="flex flex-row items-center justify-center gap-6">
        <motion.img
          width={180}
          className={`rounded-lg transition-transform duration-300 ${isZoomed ? 'scale-125' : 'scale-100'}`} // Apply scaling based on zoom state
          alt=""
          src={img}
        />
      </div>
    </motion.figure>
  );
};

// Update PageMarquee to accept images prop
const PageMarquee = ({ images }: PageMarqueeProps) => {
  return (
    <div className="container mx-auto md:max-w-[1200px]">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
        <Marquee className="[--duration:20s]">
          {images.map((logo, i) => (
            <LogoCard key={i} img={logo.img} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default PageMarquee;