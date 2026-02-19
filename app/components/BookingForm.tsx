"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AddressAutocomplete from "./AddressAutocomplete";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        serviceInterest: "Select a service",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to API or WhatsApp)
        console.log("Form submitted:", formData);
        const message = `Hello, I would like to book an appointment.\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nService: ${formData.serviceInterest === "Other" ? formData.serviceInterest + " (" + customService + ")" : formData.serviceInterest}\nMessage: ${formData.message}`;
        window.open(`https://wa.me/27686648111?text=${encodeURIComponent(message)}`, '_blank');
    };

    const [customService, setCustomService] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleBookService = (event: CustomEvent) => {
            const { category, service } = event.detail;
            setFormData(prev => ({
                ...prev,
                serviceInterest: category,
                message: service ? `I'm interested in booking the ${service} style.` : prev.message
            }));

            const formElement = document.getElementById("book-service");
            if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth" });
            }
        };

        window.addEventListener("bookService" as any, handleBookService as any);
        return () => window.removeEventListener("bookService" as any, handleBookService as any);
    }, []);

    const services = [
        "Signature Braiding",
        "Knotless Braids",
        "Cornrows",
        "Wigs & Weaves",
        "Other"
    ];

    const handleServiceSelect = (service: string) => {
        setFormData(prev => ({ ...prev, serviceInterest: service }));
        setIsDropdownOpen(false);
    };

    return (
        <section id="book-service" className="py-20 md:py-32 bg-raspberry relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 font-galafera">
                        Book Your Appointment
                    </h2>
                    <p className="text-white/90 font-sora text-sm md:text-base max-w-2xl mx-auto">
                        Ready to experience exceptional beauty services? Fill out the form below and we'll get back to you shortly.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white p-8 md:p-12 shadow-2xl rounded-sm"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 font-sora">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 font-sora">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 font-sora">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 font-sora">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <AddressAutocomplete
                                value={formData.address}
                                onChange={(value) => setFormData(prev => ({ ...prev, address: value }))}
                                label="Physical Address"
                                placeholder="Start typing your street address..."
                            />
                        </div>

                        <div className="space-y-2 relative">
                            <label className="block text-sm font-semibold text-gray-700 font-sora">
                                Service Interest *
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm bg-white text-gray-700 text-left flex justify-between items-center"
                                >
                                    <span>{formData.serviceInterest}</span>
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-xl max-h-60 overflow-auto">
                                        {services.map((service) => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => handleServiceSelect(service)}
                                                className="w-full px-4 py-3 text-left hover:bg-raspberry/5 hover:text-raspberry font-sora text-sm transition-colors border-b border-gray-50 last:border-0"
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {formData.serviceInterest === "Other" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-2"
                            >
                                <label htmlFor="customService" className="block text-sm font-semibold text-gray-700 font-sora">
                                    Please specify the service you're looking for *
                                </label>
                                <input
                                    type="text"
                                    id="customService"
                                    name="customService"
                                    value={customService}
                                    onChange={(e) => setCustomService(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm"
                                    placeholder="e.g. Bridal Styling, Custom Wig, etc."
                                />
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 font-sora">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm resize-none"
                                placeholder="Tell us about your desired service, preferred date, or any special requirements..."
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-sora font-medium py-4 hover:bg-raspberry transition-colors duration-300 text-sm tracking-wider uppercase"
                            >
                                Submit Appointment Request
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4 font-sora">
                                We typically respond within 24 hours.
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingForm;
