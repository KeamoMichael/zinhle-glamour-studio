"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, Award } from "lucide-react";

const values = [
    {
        icon: Sparkles,
        title: "Artistry",
        description:
            "Every style is a work of art. We approach each appointment with creativity and precision, tailoring our craft to your unique features.",
    },
    {
        icon: Heart,
        title: "Care",
        description:
            "We treat every client like family. From the moment you walk in, you are welcomed into a space built on warmth, respect, and attention.",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "We hold ourselves to the highest standards in every service — consistent quality that you can rely on, every single visit.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
    }),
};

const AboutContent = () => {
    return (
        <>
            {/* Our Story Section */}
            <section className="py-20 md:py-28 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* Image */}
                        <motion.div
                            className="relative h-[400px] md:h-[550px] overflow-hidden bg-raspberry"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            {/* Decorative accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-raspberry/60" />
                        </motion.div>

                        {/* Text */}
                        <div className="flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-px w-10 bg-raspberry/60" />
                                    <span className="text-raspberry font-sora text-xs font-semibold uppercase tracking-widest">
                                        Who We Are
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 font-galafera leading-tight">
                                    Where Beauty{" "}
                                    <span className="text-raspberry">Meets</span> Purpose
                                </h2>
                                <p className="text-gray-600 font-sora text-sm md:text-base leading-relaxed mb-5">
                                    Zinhle Glamour Studio was born from a deep love of beauty and
                                    a desire to create a space where every woman feels seen,
                                    celebrated, and transformed. Founded in the heart of Durban,
                                    our studio is a sanctuary — a place where artistry and care
                                    come together.
                                </p>
                                <p className="text-gray-600 font-sora text-sm md:text-base leading-relaxed">
                                    We specialise in braiding, hair treatments, and beauty
                                    services, with every appointment crafted to bring out the
                                    best version of you. We do not just do hair — we build
                                    confidence, one client at a time.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 md:py-28 bg-gray-50/60 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-normal text-raspberry mb-4 font-galafera">
                            Our Values
                        </h2>
                        <p className="text-gray-600 font-sora text-sm md:text-base max-w-xl mx-auto">
                            Three principles that guide everything we do at Zinhle Glamour Studio.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white p-10 border-b-[3px] border-transparent hover:border-raspberry transition-all duration-300 shadow-sm hover:shadow-md group"
                            >
                                <div className="w-12 h-12 rounded-full bg-raspberry/10 flex items-center justify-center mb-6 group-hover:bg-raspberry transition-colors duration-300">
                                    <value.icon
                                        className="w-5 h-5 text-raspberry group-hover:text-white transition-colors duration-300"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="text-xl font-bold font-sora text-black mb-3 group-hover:text-raspberry transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-gray-500 font-sora text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Behind the Studio Section */}
            <section className="py-20 md:py-28 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* Text */}
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-px w-10 bg-raspberry/60" />
                                    <span className="text-raspberry font-sora text-xs font-semibold uppercase tracking-widest">
                                        The Studio
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 font-galafera leading-tight">
                                    A Space Built{" "}
                                    <span className="text-raspberry">For You</span>
                                </h2>
                                <p className="text-gray-600 font-sora text-sm md:text-base leading-relaxed mb-5">
                                    Located in Durban CBD at Amen Shopping Centre, our studio is
                                    designed to be your escape. Whether you are coming in for a
                                    quick touch-up or a full transformation, you will always find
                                    a calm, welcoming environment ready to serve you.
                                </p>
                                <p className="text-gray-600 font-sora text-sm md:text-base leading-relaxed mb-8">
                                    Our team is passionate about continuous growth — always
                                    learning the latest techniques so that you always leave
                                    looking and feeling your absolute best.
                                </p>

                                <Link
                                    href="/services#book-service"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-raspberry border border-raspberry text-xs font-medium font-sora tracking-wider transition-all duration-300 hover:bg-raspberry hover:text-white group w-fit"
                                >
                                    <span className="transition-colors duration-300 group-hover:text-white">
                                        Book An Appointment
                                    </span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                                        →
                                    </span>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Image */}
                        <motion.div
                            className="relative h-[400px] md:h-[550px] overflow-hidden order-1 md:order-2 bg-raspberry"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-raspberry/60" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContent;
