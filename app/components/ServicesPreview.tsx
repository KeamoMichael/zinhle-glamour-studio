"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesPreview = () => {
    const services = [
        {
            title: "Straight Back",
            description:
                "Traditional yet refined braiding styles that offer durability and timeless elegance.",
            image: "/assets/Card Images/Braiding Card Image.jpeg",
        },
        {
            title: "Hair & Care Treatment",
            description:
                "Professional deep conditioning and scalp care that nourish vitality and restore elegance.",
            image: "/assets/Card Images/Hair Treatment Card Image2.jpeg",
        },
        {
            title: "Beauty Services",
            description:
                "Professional services in trends and styles that define durability and timeless elegance.",
            image: "/assets/Card Images/Beauty Services Card Image.jpeg",
        },
    ];

    return (
        <section id="services-preview" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-normal text-raspberry mb-5 font-galafera">
                        Our Services
                    </h2>
                    <p className="text-gray-700 font-sora text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        We provide a comprehensive suite of hair and beauty solutions
                        meticulously designed to meet the diverse needs of our clients,
                        delivered with an unwavering commitment to provide consistent
                        quality.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative h-72 sm:h-80 overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-raspberry/80 via-raspberry/30 to-transparent"></div>

                            {/* Card content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="text-white text-lg font-semibold mb-2 font-sora">
                                    {service.title}
                                </h3>
                                <p className="text-white/90 text-xs font-sora leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        href="/services#book-service"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-raspberry border border-raspberry text-xs font-medium font-sora tracking-wider transition-all duration-300 hover:bg-raspberry hover:text-white group"
                    >
                        <span className="transition-colors duration-300 group-hover:text-white">View An Appointment</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;
