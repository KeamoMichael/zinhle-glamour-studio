"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.47.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.49.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.53.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.4949.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.4950.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.5052.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.5054.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.5155.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.5202.jpeg",
    "/assets/clients/WhatsApp Image 2026-01-07 at 08.22.53033.jpeg",
];

const OurWork = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const paginate = (newDirection: number) => {
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    };

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 mb-14 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-normal text-raspberry mb-5 font-galafera">
                        Our Work
                    </h2>
                    <p className="text-gray-600 font-sora text-sm md:text-base max-w-2xl mx-auto">
                        A showcase of our recent transformations and exceptional artistry.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full">
                {/* Carousel Container */}
                <div className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Slider Track */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence initial={false}>
                            {/* Previous Image Preview */}
                            <motion.div
                                key={`prev-${currentIndex}`}
                                initial={{ opacity: 0, x: -550 }}
                                animate={{ opacity: 0.3, x: -550 }}
                                exit={{ opacity: 0, x: -700 }}
                                className="absolute w-[300px] md:w-[500px] aspect-square hidden md:block"
                            >
                                <Image
                                    src={images[(currentIndex - 1 + images.length) % images.length]}
                                    alt="Previous preview"
                                    fill
                                    className="object-cover rounded-sm"
                                />
                            </motion.div>

                            {/* Current Main Image */}
                            <motion.div
                                key={`current-${currentIndex}`}
                                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute w-[320px] md:w-[500px] aspect-square z-10 shadow-2xl"
                            >
                                <Image
                                    src={images[currentIndex]}
                                    alt={`Our Work ${currentIndex + 1}`}
                                    fill
                                    className="object-cover rounded-sm"
                                    priority
                                />
                            </motion.div>

                            {/* Next Image Preview */}
                            <motion.div
                                key={`next-${currentIndex}`}
                                initial={{ opacity: 0, x: 550 }}
                                animate={{ opacity: 0.3, x: 550 }}
                                exit={{ opacity: 0, x: 700 }}
                                className="absolute w-[300px] md:w-[500px] aspect-square hidden md:block"
                            >
                                <Image
                                    src={images[(currentIndex + 1) % images.length]}
                                    alt="Next preview"
                                    fill
                                    className="object-cover rounded-sm"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Side Fades - More aggressive to totally fade from sides */}
                    <div className="absolute inset-y-0 left-0 w-[25%] md:w-[40%] bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-[25%] md:w-[40%] bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />
                </div>
            </div>

            {/* Navigation Arrows (Stay visible over fades) */}
            {/* Desktop Navigation Arrows */}
            <div className="max-w-6xl mx-auto relative px-8">
                <button
                    className="absolute -top-[250px] md:-top-[280px] left-4 md:left-10 p-3 text-raspberry/80 hover:text-raspberry transition-colors z-30 outline-none"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button
                    className="absolute -top-[250px] md:-top-[280px] right-4 md:right-10 p-3 text-raspberry/80 hover:text-raspberry transition-colors z-30 outline-none"
                    onClick={() => paginate(1)}
                >
                    <ChevronRight size={48} strokeWidth={1} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12 bg-white relative z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                            ? "bg-raspberry scale-125 shadow-sm"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default OurWork;

// Note: Direction calculation was simplified to keep predictable slide behavior in multi-depth view
const direction = 0; 
