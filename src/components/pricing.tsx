"use client";
import { CircleCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Pricing = () => {
 

  return (
    <div id="price" className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          Our <span className="text-yellow-500">Projects</span>
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
          We take pride in working on challenging and critical projects. 
          Currently, we are operating at an altitude of 18,000 feet on 
          the Indo-China border, executing high-altitude 
          construction with precision. 
          Below are some of our key achievements include:
        </p>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Project",
              price: "The Amrit Payjal Project",
              features: [
                "Stretching from Matatila to Jhansi",
                "Ensures clean water supply to thousands of residents",
                "Enhances regional water infrastructure and long-term sustainability",
                "Successfully completed with advanced engineering techniques",
              ],
              bgColor: "bg-zinc-200 dark:bg-zinc-800",
              bgImage: "url('/hero-img.png')",
            },
            {
              title: "Project",
              price: "Road infrastructure for PWD",
              features: [
                "Focused on improving connectivity in the Datia region",
                "Includes road repairs, upgrades, and new constructions",
                "Enhances transportation links between local communities",
                "Contributes to regional economic development and accessibility",
              ],
              bgColor: "bg-yellow-500 text-white",
            },
            {
              title: "Project",
              price: "145 MLD pipeline",
              features: [
                "High-capacity pipeline for improved water distribution",
                "Supports irrigation and drinking water needs across key regions",
                "Completed on time, adhering to strict safety and quality protocols",
                "Part of a broader effort to enhance water management infrastructure",
              ],
              bgColor: "bg-zinc-200 dark:bg-zinc-800",
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-[530px] ${plan.bgColor}`}>
                <CardHeader>
                  <CardTitle className="text-xs font-normal">
                    {plan.title}
                  </CardTitle>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-3/4">
                  <div className="grid gap-4">
                    <div className="h-[1px] bg-zinc-800 dark:bg-white" />
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CircleCheck className="h-4 w-4 text-zinc-800 dark:text-white" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
