"use client";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { MoveUpRight } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div id="features" className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          About {" "}
          <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
            Jay Shri Buildcon is a leading construction firm 
            established in 2015, specializing in 
            infrastructure development. 
            With projects spanning across dams, roads, 
            canals, and pipelines, 
            we are dedicated to building essential 
            structures that enhance regional connectivity and water management.
        </p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animationVariants}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-10"
        >
          <motion.div
            className="lg:col-span-2 h-[324px] hover:text-white hover:bg-yellow-500 dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <p className="leading-tight">
                Our expertise lies in delivering projects that 
                adhere to strict quality and safety standards, 
                ensuring every detail meets industry requirements. 
                This commitment allows us to create reliable infrastructure 
                that stands the test of time.
                </p>
                <div className="group-hover:bg-white bg-yellow-500 w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-yellow-500" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Quality Focus</h3>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-3 h-[324px] hover:text-white hover:bg-yellow-500 dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <div className="leading-tight w-full">
                  <p className="max-w-md">
                    We understand the importance of completing 
                    projects on time, without sacrificing quality. 
                    Our team’s efficient management and resource planning ensure 
                    that deadlines are met, while maintaining the highest standards.
                  </p>
                </div>
                <div className="group-hover:bg-white bg-yellow-500 w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-yellow-500" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Timely Delivery</h3>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 h-[324px] hover:text-white hover:bg-yellow-500 dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <div className="leading-tight w-full">
                  <p className="max-w-md">
                  By using advanced construction techniques, 
                  we achieve superior results that set us apart. 
                  Our innovation and technical prowess drive the success 
                  of our projects and push the boundaries of traditional construction.
                  </p>
                </div>
                <div className="group-hover:bg-white bg-yellow-500 w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-yellow-500" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Inovation Solution</h3>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-2 h-[324px] hover:text-white hover:bg-yellow-500 dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <p className="leading-tight">
                  At Jay Shri Buildcon, our mission is to 
                  support economic growth and regional 
                  development through our work. We collaborate 
                  closely with clients to ensure their needs 
                  are met and expectations exceeded.
                </p>
                <div className="group-hover:bg-white bg-yellow-500 w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-yellow-500" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Timeless Precision</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
