"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SingleCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative py-12 md:px-0 px-6 overflow-hidden my-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }} // Initial state
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
        transition={{ duration: 0.5 }} // Transition settings
        className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl py-10 px-6 md:px-10 flex flex-col lg:flex-row items-center"
      >
        <div className="flex flex-col lg:w-1/2 justify-center mb-8 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
            transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
            className="text-3xl md:text-6xl font-bold leading-snug"
          >
            Contact <span className="text-yellow-500">Us</span> Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
            transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
            className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8"
          >
            We’re here to help you with your construction and infrastructure needs. 
            Whether you have a project inquiry or need more information about our services, 
            feel free to reach out. Our team at Jay Shri Buildcon is ready to assist you 
            with expert advice and reliable solutions.
          </motion.p>
          <div className="flex flex-col items-start justify-start gap-4 p-4 bg-zinc-300 dark:bg-zinc-700 rounded-md">
            <motion.p 
              className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <span className="block mb-2 text-xl font-bold">Contact Details:</span>
              
              <span className="block mb-2 text-base md:text-lg">
                📞 <strong>Mobile:</strong> 
                <span className="block md:inline"> 9005226363, 9415112493, 7388080806</span>
              </span>

              <span className="block mb-2 text-base md:text-lg">
                ✉️ <strong>Email:</strong> 
                <span className="block md:inline"> jayshribuildconho.jhansi2015@gmail.com</span>
              </span>

              <span className="block mb-2 text-base md:text-lg">
                🏢 <strong>Office:</strong> 
                <span className="block md:inline"> Ghisoli Block Babina Distt - Jhansi (U.P)</span>
              </span>
            </motion.p>
          </div>
        </div>
        
        {/* Adjusted image positioning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          animate={isInView ? { opacity: 1, scale: 1 } : {}} // Animation state
          transition={{ duration: 0.5, delay: 0.3 }} // Delay for staggered effect
          className="relative lg:w-[300px] lg:h-auto w-full h-auto flex justify-center lg:absolute lg:right-[10%] overflow-hidden"
        >
          <img
            className="w-full h-auto"
            alt="JayShree"
            src="/Jay shree.png"
            alt="CTA Image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SingleCta;