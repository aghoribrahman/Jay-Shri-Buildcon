"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HardHat, CalendarCheck, ShieldCheck, } from "lucide-react";

const Discover = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div id="discover" className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          At Jay Shri Buildcon <span className="text-yellow-500">We Provide quality </span>
          infrastructure solution
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
        we construct dams, roads, canals, and pipelines, enhancing water management and connectivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <motion.div
            ref={ref}
            className="flex flex-col p-6 bg-zinc-200 dark:bg-zinc-800 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-yellow-500 w-fit p-4 rounded-full">
              <ShieldCheck className="text-white" />
            </div>
            <h3 className="text-3xl mt-10">Quality and safety commitment</h3>
            <p className="mt-2 leading-tight mb-4">
              We prioritize high standards and safety in every project.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col p-6 bg-zinc-200 dark:bg-zinc-800 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-yellow-500 w-fit p-4 rounded-full">
              <CalendarCheck className="text-white" />
            </div>
            <h3 className="text-3xl mt-10">Timely project delivery</h3>
            <p className="mt-2 leading-tight mb-4">
              Ensuring projects are completed on schedule, without compromise.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col p-6 bg-zinc-200 dark:bg-zinc-800 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-yellow-500 w-fit p-4 rounded-full">
              <HardHat className="text-white" />
            </div>
            <h3 className="text-3xl mt-10">Advanced construction techniques</h3>
            <p className="mt-2 leading-tight mb-4">
              Utilizing modern methods to achieve the best outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
