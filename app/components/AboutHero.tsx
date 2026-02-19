"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/Zee - Hero Image For Web 2.jpg"
                    alt="About Zinhle Glamour Studio"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-8 sm:px-6 lg:px-8 pt-20">
                <motion.p
                    className="font-sora text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Our Story
                </motion.p>
                <motion.h1
                    className="font-galafera text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                    About Us
                </motion.h1>
                <motion.div
                    className="w-12 h-[1px] bg-white/50 mt-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
            </div>
        </section>
    );
};

export default AboutHero;
