"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Faq = () => {
  const faq = [
    {
      title: "What types of projects does Jay Shri Buildcon specialize in?",
      description:
        "We specialize in a wide range of infrastructure projects, including the construction of dams, roads, canals, and pipelines. Our expertise spans across various sectors like water management and transportation infrastructure.",
    },
    {
      title: "Where is Jay Shri Buildcon currently operating?",
      description:
        "We are currently engaged in a high-altitude project on the Indo-China border, working at 18,000 feet. Additionally, we have completed projects across several regions, including Jhansi, Datia (M.P.), and more.",
    },
    {
      title: "Does Jay Shri Buildcon deliver projects on time?",
      description:
        "Yes, we pride ourselves on our ability to deliver projects within the agreed timelines. Our efficient project management and skilled workforce allow us to meet deadlines without compromising on quality.",
    },
    {
      title: "How does Jay Shri Buildcon ensure the quality and safety of its projects?",
      description:
        "Quality and safety are our top priorities. We follow stringent industry standards, using advanced construction techniques to ensure that all our projects meet the highest benchmarks for durability and safety.",
    },
    {
      title: "What materials and techniques does Jay Shri Buildcon use in its construction projects?",
      description:
        "We use high-quality, industry-approved materials in all our projects, ensuring long-lasting results. Our team also leverages modern construction techniques such as advanced machinery, eco-friendly practices, and efficient resource management to deliver superior infrastructure solutions.",
    },
    {
      title: "How can I get in touch with Jay Shri Buildcon for a project inquiry?",
      description:
        "You can contact us through our website, phone (9005226363) or by email (jayshribuildconho.jhansi2015@gmail.com). Our team will be happy to discuss your project requirements and how we can assist you in achieving your infrastructure goals.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="faq" className="py-12 md:px-0 px-6 overflow-hidden mt-20">
      <div className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-semibold leading-snug">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h1>
            <p className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8">
              At Jay Shri Buildcon, we understand that you may have 
              questions about our services and processes. 
              Below, we’ve compiled answers to some of the most 
              common inquiries to help you better understand what we 
              do and how we can assist you in your infrastructure needs.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-12 lg:py-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }} // Initial state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
              transition={{ duration: 0.5 }} // Transition settings
            >
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem
                    value={`item-${index + 1}`}
                    key={index}
                    className="py-4 border-b border-zinc-300 dark:border-zinc-700"
                  >
                    <AccordionTrigger className="text-md font-bold text-start">
                      {item.title}
                    </AccordionTrigger>
                    {/* Add motion for content animation */}
                    <AccordionContent>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} // Initial state for content
                        animate={{ height: 'auto', opacity: 1 }} // Animate to auto height and full opacity
                        exit={{ height: 0, opacity: 0 }} // Exit animation when collapsed
                        transition={{ duration: 0.3 }} // Transition settings
                      >
                        {item.description}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;