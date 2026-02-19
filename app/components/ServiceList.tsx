"use client";

import { motion } from "framer-motion";
import { servicesData } from "../data/services";

const ServiceList = () => {
    const handleBook = (category: string, service: string) => {
        const event = new CustomEvent("bookService", {
            detail: { category, service }
        });
        window.dispatchEvent(event);
    };

    return (
        <section className="py-12 md:py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                <div className="space-y-20 md:space-y-32">
                    {servicesData.map((category, categoryIndex) => (
                        <div id={category.title} key={category.title} className="scroll-mt-40">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="max-w-4xl mb-10 md:mb-16"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="h-px w-12 bg-raspberry/60"></span>
                                    <span className="text-raspberry font-sora text-sm font-semibold uppercase tracking-widest">
                                        {category.subtitle || `Collection 0${categoryIndex + 1}`}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-galafera mb-6">
                                    {category.title}
                                </h2>
                                {category.description && (
                                    <p className="text-gray-600 font-sora text-base md:text-lg leading-relaxed max-w-2xl">
                                        {category.description}
                                    </p>
                                )}
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                                {category.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item.name + itemIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                                        className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 border-l-[3px] border-transparent hover:border-raspberry group"
                                    >
                                        <div className="flex flex-col h-full justify-between gap-4">
                                            <div>
                                                <div className="flex justify-between items-start mb-3">
                                                    <h3 className="text-xl md:text-2xl font-bold font-sora text-gray-900 group-hover:text-raspberry transition-colors duration-300">
                                                        {item.name}
                                                    </h3>
                                                    {item.price && (
                                                        <span className="text-lg font-bold font-sora text-raspberry bg-raspberry/5 px-3 py-1 rounded-sm">{item.price}</span>
                                                    )}
                                                </div>
                                                <p className="text-gray-500 font-sora text-sm md:text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="pt-4 border-t border-gray-50 mt-2">
                                                <button
                                                    onClick={() => handleBook(category.title, item.name)}
                                                    className="text-xs font-sora font-semibold text-gray-400 uppercase tracking-wider group-hover:text-raspberry transition-colors flex items-center gap-2 w-full text-left outline-none focus:text-raspberry"
                                                >
                                                    Book This Style <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:text-raspberry transition-transform">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;
