"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Apr 8, 2024",
      readTime: "6 min read",
      title: "Innovation In Construction Technology",
      image: "/blog1.webp",
      url: "https://aashiyana.tatasteel.com/in/en/blogs-articles/innovation-in-construction-technology.html", // Add URL for the blog post
    },
    {
      id: 2,
      date: "Mar 15, 2024",
      readTime: "5 min read",
      title: "Understanding RCC Construction & Structural Loads",
      image: "/blog2.webp",
      url: "https://aashiyana.tatasteel.com/in/en/blogs-articles/understanding-rcc-construction---structural-loads.html", // Add URL for the blog post
    },
    {
      id: 3,
      date: "Feb 28, 2022",
      readTime: "7 min read",
      title: "Real Estate Industry in India: Complete Guide",
      image: "/blog3.webp",
      url: "https://aashiyana.tatasteel.com/in/en/blogs-articles/the-real-estate-industry-in-india.html", // Add URL for the blog post
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="blogs" className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
          transition={{ duration: 0.5 }} // Transition settings
          className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug"
        >
          Stay Inspired with Our Latest{" "}
          <span className="text-yellow-500">Insights</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
          transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
          className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight"
        >
          Stay updated with the latest industry insights, 
          project highlights, and expert advice from Jay Shri Buildcon. 
          Our blog covers a wide range of topics in construction, 
          infrastructure development, and innovative building techniques. 
          Dive into our latest posts to learn more about how we’re 
          shaping the future of construction.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {blogPosts.map((post) => (
            <motion.a // Change to motion.a for clickable link
              key={post.id}
              href={post.url} // Set the URL here
              target="_blank" // Open in a new tab (optional)
              rel="noopener noreferrer" // Security best practice for external links
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
              className="dark:bg-zinc-800 bg-zinc-200 rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Blogs;