"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CtaMultiple = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-[1200px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
        Company <span className="text-yellow-500">Pillars</span>{" "}
      </h1>
        <div className="flex flex-col gap-32">
          <motion.div
            ref={ref}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
                Pillar 1
              </h2>
              <p className="max-w-lg my-5 text-base lg:text-lg">
                Download your final designs in high-resolution formats suitable
                for print and digital use. Ensure your work looks professional
                and polished in any medium.
              </p>
              
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-[300px] w-full"
            >
              <img
                className="w-full h-auto rounded-md"
                src="/cta-multiple-1.avif"
                alt="High Resolution Outputs"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-[300px] w-full"
            >
              <img
                className="w-full h-auto rounded-md"
                src="/cta-multiple-2.avif"
                alt="Real-Time Collaboration"
              />
            </motion.div>
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
                Pillar 2
              </h2>
              <p className="max-w-lg my-5 text-base lg:text-lg">
                Seamlessly collaborate with your team in real-time. Share ideas,
                give feedback, and make edits together, no matter where you are.
              </p>
             
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
                Pillar 3
              </h2>
              <p className="max-w-lg my-5 text-base lg:text-lg">
                Plan and schedule your design projects with ease. Use our
                scheduling tools to set deadlines, track milestones, and ensure
                timely delivery of your design work.
              </p>
             
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:w-[300px] w-full"
            >
              <img
                className="w-full h-auto rounded-md"
                src="/cta-multiple-3.avif"
                alt="Advanced Scheduling Tools"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CtaMultiple;