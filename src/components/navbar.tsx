"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import JayShree from "../../public/Jay Shree.png";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "How it Works", href: "#discover" },
    { name: "About Us", href: "#features" },
    { name: "Projects", href: "#price" },
    { name: "Blog", href: "#blogs" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetElement = document.querySelector(href); // Select the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 bg-white shadow-md dark:bg-black`} // Ensure it sticks to the top
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-fluid md:max-w-[1200px] mx-auto flex justify-between items-center p-2"> {/* Added padding for better spacing */}
        <Link href="/" className="text-xl font-bold flex items-center ">
          <Image 
            src={JayShree} 
            alt="Jay Shri Buildicon Infra" 
            width={150} 
            height={150} 
          />
        </Link>

        {/* For large screens */}
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)} // Use smooth scroll function
              className="font-outfit text-lg text-slate-800 dark:text-white 
                        hover:bg-zinc-700 hover:text-white p-2 
                        transition-all duration-300 
                        rounded-md transform hover:-translate-y-1 
                        hover:shadow-lg"
            >
              {item.name}
            </a>
          ))}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-gray-800 dark:text-white">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* For small screens */}
        <div className="md:hidden flex items-center px-2">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              className="dark:bg-zinc-800 bg-zinc-200"
              asChild
            >
              <div
                className="h-12 w-12 flex flex-col justify-center items-center cursor-pointer rounded-md"
                onClick={toggleMenu}
              >
                <div
                  className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-0.1" : "mt-1.5"
                  }`}
                ></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-zinc-800 text-white mt-2 rounded-lg"
              sideOffset={0}
              align="end"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <DropdownMenuItem className="rounded-none hover:bg-transparent focus:bg-transparent h-10">
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)} // Use smooth scroll function
                      className="w-full p-2 text-lg hover:bg-zinc-700 rounded-md transition-transform duration-300 transform hover:-translate-y-1 dark:text-white"
                    >
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                </motion.div>
              ))}
              {/* Theme Toggle for Mobile */}
              <DropdownMenuItem className="rounded-none hover:bg-transparent focus:bg-transparent h-10">
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-full p-2 text-lg hover:bg-zinc-700 rounded-md transition-transform duration-300 transform dark:text-white">
                  {theme === "dark" ? <Sun /> : <Moon />}
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;