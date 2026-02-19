"use client";

import { useState, useEffect } from "react";
import { servicesData } from "../data/services";
import clsx from "clsx";

const ServiceCategoryNav = () => {
    const [activeCategory, setActiveCategory] = useState(servicesData[0].title);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.6; // Approximate hero height (60vh)

            // Check if nav should be "sticky" style
            setIsScrolled(scrollY > heroHeight);

            // Logic to highlight active category based on scroll position
            const scrollPosition = scrollY + 200; // Offset

            for (const category of servicesData) {
                const element = document.getElementById(category.title);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveCategory(category.title);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCategory = (title: string) => {
        const element = document.getElementById(title);
        if (element) {
            // Adjust offset for sticky header + nav
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveCategory(title);
        }
    };

    return (
        <div
            className={clsx(
                "sticky top-16 z-40 bg-white/95 backdrop-blur-sm py-4 transition-all duration-300 border-b",
                isScrolled
                    ? "shadow-sm border-transparent"
                    : "shadow-none border-gray-100"
            )}
        >
            {/* Mobile: Full width with mask and padding */}
            <div className="md:hidden relative w-full">
                <div
                    className="flex gap-4 overflow-x-auto no-scrollbar px-8 w-full"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                    }}
                >
                    {servicesData.map((category) => (
                        <button
                            key={category.title}
                            onClick={() => scrollToCategory(category.title)}
                            className={clsx(
                                "whitespace-nowrap px-4 py-2 rounded-full text-sm font-sora font-medium transition-all duration-300 border flex-shrink-0",
                                activeCategory === category.title
                                    ? "bg-raspberry text-white border-raspberry"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-raspberry hover:text-raspberry"
                            )}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop: Standard centered layout */}
            <div className="hidden md:flex justify-center">
                <div className="flex gap-8">
                    {servicesData.map((category) => (
                        <button
                            key={category.title}
                            onClick={() => scrollToCategory(category.title)}
                            className={clsx(
                                "whitespace-nowrap px-4 py-2 rounded-full text-sm font-sora font-medium transition-all duration-300 border",
                                activeCategory === category.title
                                    ? "bg-raspberry text-white border-raspberry"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-raspberry hover:text-raspberry"
                            )}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCategoryNav;
