"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasChevron: true,
      subItems: [
        { name: "Signature Braiding", href: "/services#Signature Braiding" },
        { name: "Knotless Braids", href: "/services#Knotless Braids" },
        { name: "Cornrows", href: "/services#Cornrows" }
      ]
    },
    { name: "About Us", href: "#about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
            {/* Left Column - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 justify-start h-full">
              {["Home", "Services", "About"].map((link) => (
                <div key={link} className="relative h-full flex items-center group">
                  <Link
                    href={link === "Home" ? "/" : link === "Services" ? "/services" : "#about"}
                    className="text-sm text-gray-800 font-medium font-sora tracking-wide relative z-10"
                  >
                    {link}
                  </Link>
                  <span className="absolute bottom-0 left-0 h-[2px] bg-raspberry w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                </div>
              ))}
            </div>

            {/* Center Column - Logo */}
            <div className="flex justify-start md:justify-center">
              <Link href="/" className="flex items-center">
                <div className="relative h-8 w-24 md:h-10 md:w-32">
                  <Image
                    src="/assets/Zinhle Glamour Studio_Logo Design (Black01).png"
                    alt="Zinhle Glamour Studio"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right Column - CTA Button (Desktop) / Hamburger (Mobile) */}
            <div className="flex justify-end items-center">
              <Link
                href="/services#book-service"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-transparent text-raspberry border border-raspberry text-xs font-medium font-sora tracking-wide transition-all duration-300 hover:bg-raspberry hover:text-white group"
              >
                <span className="group-hover:text-white transition-colors duration-300">Book An Appointment</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 hover:text-black focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Standalone Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col h-screen w-screen overflow-hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-16">
              {/* Logo */}
              <div className="relative h-8 w-24">
                <Image
                  src="/assets/Zinhle Glamour Studio_Logo Design (Black01).png"
                  alt="Zinhle Glamour Studio"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-900 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col px-8 pt-12 pb-12 overflow-y-auto">
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <div className="border-b border-gray-100 pb-4">
                      {link.hasChevron ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full text-left group"
                          >
                            <span className="text-lg font-sora text-black">
                              {link.name}
                            </span>
                            <ChevronDown
                              size={20}
                              className={clsx("text-black transition-transform duration-300", isServicesOpen && "rotate-180")}
                              strokeWidth={2.5}
                            />
                          </button>

                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-4 space-y-4">
                                  {link.subItems?.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      className="block text-gray-500 font-sora text-base hover:text-raspberry transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center justify-between group"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-lg font-sora text-black">
                            {link.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-auto pb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href="/services#book-service"
                  className="flex items-center justify-center gap-2 w-full py-4 border border-raspberry text-raspberry bg-white font-sora font-medium text-sm tracking-wide transition-all duration-300 hover:bg-raspberry hover:text-white group"
                  onClick={() => setIsOpen(false)}
                >
                  Book An Appointment
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Bottom Line Animation */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-raspberry"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
