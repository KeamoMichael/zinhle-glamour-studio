"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
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
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[105] bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
            {/* Left Column - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 justify-start h-full">
              {["Home", "Services", "About"].map((link) => (
                <div key={link} className="relative h-full flex items-center group">
                  <Link
                    href={link === "Home" ? "/" : link === "Services" ? "/services" : "/about"}
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
                className="md:hidden relative w-10 h-10 flex justify-center items-center focus:outline-none group"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className={clsx(
                    "absolute h-[2px] w-6 bg-gray-900 rounded-full transition-all duration-300 ease-in-out",
                    isOpen ? "rotate-45" : "-translate-y-2"
                  )}
                />
                <span
                  className={clsx(
                    "absolute h-[2px] w-6 bg-gray-900 rounded-full transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={clsx(
                    "absolute h-[2px] w-6 bg-gray-900 rounded-full transition-all duration-300 ease-in-out",
                    isOpen ? "-rotate-45" : "translate-y-2"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Standalone Full Screen Overlay */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 z-[100] bg-white flex flex-col h-[100dvh] w-screen overflow-hidden transition-all duration-300 ease-in-out pt-16",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col px-8 pt-12 pb-12 overflow-y-auto">
          <div className="space-y-6">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className={clsx(
                  "transition-all duration-500 ease-out",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? `${0.1 + index * 0.1}s` : "0s",
                }}
              >
                <div className="border-b border-gray-100 pb-4">
                  {link.hasChevron ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left group py-2"
                      >
                        <span className="text-lg font-sora text-black">
                          {link.name}
                        </span>
                        <ChevronDown
                          size={20}
                          className={clsx(
                            "text-black transition-transform duration-300",
                            isServicesOpen && "rotate-180"
                          )}
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
                      className="flex items-center justify-between group py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg font-sora text-black">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            className={clsx(
              "mt-auto pb-10 transition-all duration-500 ease-out",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: isOpen ? "0.4s" : "0s",
            }}
          >
            <Link
              href="/services#book-service"
              className="flex items-center justify-center gap-2 w-full py-4 border border-raspberry text-raspberry bg-white font-sora font-medium text-sm tracking-wide transition-all duration-300 hover:bg-raspberry hover:text-white group"
              onClick={() => setIsOpen(false)}
            >
              Book An Appointment
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Line Animation */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-raspberry transition-all duration-700 ease-out"
          style={{ width: isOpen ? "100%" : "0%", transitionDelay: isOpen ? "0.2s" : "0s" }}
        />
      </div>
    </>
  );
};

export default Navbar;
