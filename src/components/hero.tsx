"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";



const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      id="hero"
      className="relative py-2 md:px-0 px-6 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      
      <motion.div
        className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl py-24 lg:py-36 px-10"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col lg:w-2/3 justify-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl md:text-7xl font-bold leading-snug"
            variants={itemVariants}
          >
            Reliable infrastructure solutions for a <span className="text-yellow-500">connected</span>{" "}
            tomorrow
          </motion.h1>
          <motion.p
            className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8"
            variants={itemVariants}
          >
            Expertise in roads, dams, and water management.
          </motion.p>
          <motion.div
            className="flex items-center justify-start gap-4"
            variants={itemVariants}
          >
            <Button onClick={scrollToContact} className="text-yellow-500 bg-black" size="lg">Contact Us</Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="flex-shrink-0" // Prevents the image from shrinking
          variants={itemVariants}
        >
          
        </motion.div>
        
        
        <motion.div
          className="absolute bottom-[0%] lg:bottom-[0%] right-[-8%] overflow-hidden"
          variants={itemVariants}
        >
          <img alt="heroImage" className="lg:w-[610px] w-[250px]" src="/hero-img.png" />
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
