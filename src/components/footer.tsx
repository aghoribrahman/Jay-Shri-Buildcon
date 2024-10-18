import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import JayShree from "../../public/Jay Shree.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-800 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-1">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
          <Image 
            src={JayShree} 
            alt="Jay Shree Buildicon Infra" 
            width={90} 
            height={90} 
          />
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link href="#discover" className="hover:underline text-lg">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:underline text-lg">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#price" className="hover:underline text-lg">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="hover:underline text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline text-lg">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Separator className="my-4 bg-zinc-300 dark:bg-zinc-700" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Jay Shree Buildicon. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline text-zinc-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline text-zinc-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
