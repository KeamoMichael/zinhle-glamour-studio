"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { X, Calendar, HelpCircle, MapPin, MessageCircle, ChevronRight, ChevronLeft, ArrowLeft } from "lucide-react";
import { servicesData } from "../data/services";

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<"main" | "services">("main");
    const menuRef = useRef<HTMLDivElement>(null);

    // Toggle visibility on scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsOpen(false); // Close menu if button hides
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setTimeout(() => setView("main"), 200); // Reset view after closing
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Reset view when opening
    useEffect(() => {
        if (isOpen) setView("main");
    }, [isOpen]);

    const phoneNumber = "27688688111"; // Replace with actual number if different

    // Flatten services for the list
    const allServices = servicesData.flatMap(category =>
        category.items.map(item => ({
            category: category.title,
            name: item.name
        }))
    );

    const mainOptions = [
        {
            id: "book",
            label: "Book an Appointment",
            icon: Calendar,
            action: () => setView("services"),
        },
        {
            id: "inquiry",
            label: "General Inquiry",
            icon: HelpCircle,
            message: "Hi there! I have a question about your services.",
        },
        {
            id: "location",
            label: "Get Location",
            icon: MapPin,
            message: "Hi! Could you please send me your studio location?",
        },
        {
            id: "custom",
            label: "Custom Request",
            icon: MessageCircle,
            message: "Hello! I have a custom request.",
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 flex flex-col items-end gap-4" ref={menuRef}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-lg shadow-xl border border-gray-100 w-72 origin-bottom-right mb-2 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#128C7E] text-white p-4">
                            <h3 className="font-sora font-semibold text-sm">
                                {view === "main" ? "How can we help?" : "Select a Service"}
                            </h3>
                            <p className="text-xs opacity-90 mt-1">
                                {view === "main" ? "Select a topic to chat on WhatsApp" : "Choose a service to book"}
                            </p>
                        </div>

                        {/* Content Area */}
                        <div className="p-2">
                            <AnimatePresence mode="wait">
                                {view === "main" ? (
                                    <motion.div
                                        key="main"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {mainOptions.map((option) => (
                                            option.action ? (
                                                <button
                                                    key={option.id}
                                                    onClick={option.action}
                                                    className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-md transition-colors text-sm font-sora text-gray-700 flex items-center justify-between group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <option.icon className="w-4 h-4 text-[#25D366]" />
                                                        <span>{option.label}</span>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#25D366] transition-colors" />
                                                </button>
                                            ) : (
                                                <a
                                                    key={option.id}
                                                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(option.message || "")}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-md transition-colors text-sm font-sora text-gray-700 flex items-center justify-between group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <option.icon className="w-4 h-4 text-[#25D366]" />
                                                        <span>{option.label}</span>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#25D366] transition-colors" />
                                                </a>
                                            )
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="services"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col h-full"
                                    >
                                        <button
                                            onClick={() => setView("main")}
                                            className="flex items-center gap-2 text-xs font-sora text-gray-500 hover:text-[#25D366] px-3 py-2 mb-2 transition-colors"
                                        >
                                            <ArrowLeft className="w-3 h-3" />
                                            Back to menu
                                        </button>

                                        <div className="max-h-60 overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-gray-200">
                                            {allServices.map((service, index) => (
                                                <a
                                                    key={index}
                                                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello! I'd like to book an appointment for ${service.name} (${service.category}).`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full text-left px-3 py-2.5 hover:bg-gray-50 rounded-md transition-colors group"
                                                >
                                                    <div className="text-sm font-sora text-gray-800 group-hover:text-[#25D366] transition-colors font-medium">
                                                        {service.name}
                                                    </div>
                                                    <div className="text-xs font-sora text-gray-400">
                                                        {service.category}
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                    pointerEvents: isVisible ? "auto" : "none"
                }}
                transition={{ duration: 0.3 }}
                onClick={() => { setIsVisible(true); setIsOpen(!isOpen); }} // Ensure visible when clicked, toggle menu
                onTap={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 hover:scale-110 relative"
                aria-label="Toggle chat menu"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-8 h-8"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Ping animation effect - only when closed */}
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppButton;
