"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceHero = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/wmremove-transformed (1).jpeg"
                    alt="Our Services"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-8 sm:px-6 lg:px-8 pt-20">
                <motion.h1
                    className="font-galafera text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Our <br className="md:hidden" /> Services
                </motion.h1>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Link
                        href="#book-service"
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

export default ServiceHero;
