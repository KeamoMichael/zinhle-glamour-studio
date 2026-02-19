"use client";

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic will be handled here
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact-form" className="py-20 bg-raspberry">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-normal text-white mb-4 font-gilda">
                        Book Your Appointment
                    </h2>
                    <p className="text-white/90 font-sora">
                        Ready to experience exceptional beauty services? Fill out the form below and we'll get back to you shortly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-sora">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-raspberry transition-colors font-sora"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sora">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-raspberry transition-colors font-sora"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-sora">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-raspberry transition-colors font-sora"
                            />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-sora">
                                Service Interest *
                            </label>
                            <select
                                id="service"
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-raspberry transition-colors font-sora"
                            >
                                <option value="">Select a service</option>
                                <option value="braiding">Signature Braiding</option>
                                <option value="hair-care">Hair Care & Treatment</option>
                                <option value="eyelashes">Classic Eyelashes</option>
                                <option value="consultation">Consultation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sora">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your desired service, preferred date, or any special requirements..."
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-raspberry transition-colors font-sora resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-4 bg-black text-white font-medium font-sora transition-all duration-300 hover:bg-raspberry hover:scale-[1.02]"
                    >
                        Submit Appointment Request
                    </button>

                    <p className="text-sm text-gray-500 font-sora mt-4 text-center">
                        We'll respond within 24 hours to confirm your appointment.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
