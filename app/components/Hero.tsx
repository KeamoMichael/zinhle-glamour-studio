"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <Image
          src="/assets/Mobile.jpeg"
          alt="Zinhle Glamour Studio"
          fill
          className="object-cover object-center scale-110"
          priority
        />
      </div>

      {/* Background Image - Desktop */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <Image
          src="/assets/Desktop.jpeg"
          alt="Zinhle Glamour Studio"
          fill
          className="object-cover object-top scale-125"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-8 sm:px-6 lg:px-8 -mt-10">
        <motion.h1
          className="font-galafera text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="md:hidden">
            The Sanctuary<br />
            of Beauty<br />
            & Elegance
          </span>
          <span className="hidden md:block">
            The Sanctuary of
            <br />
            Beauty & Elegance
          </span>
        </motion.h1>

        <motion.div
          className="mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/services#book-service"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-white text-xs sm:text-sm font-medium font-sora tracking-wider transition-all duration-300 hover:bg-white hover:text-black group"
          >
            Book An Appointment
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
