"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AddressAutocomplete from "./AddressAutocomplete";
import { Home, Store, MapPin, Phone, Mail, User, Info, Truck } from "lucide-react";

// Salon Coordinates (Amen Shopping Centre, Durban CBD)
const SALON_LOCATION = { lat: -29.8587, lon: 31.0218 };

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        lat: "",
        lon: "",
        bookingType: "salon", // 'salon' or 'housecall'
        serviceInterest: "Select a service",
        message: ""
    });

    const [travelFee, setTravelFee] = useState<{ fee: number, distance: number } | null>(null);

    // Haversine Formula for distance calculation
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // Earth's radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    };

    const calculateTravelFee = (distance: number) => {
        // Updated based on the professional rates discussed
        if (distance <= 5) return 100; // Updated base to R100 as per info text
        if (distance <= 15) return 180;
        if (distance <= 30) return 280;
        return 380;
    };

    // Auto-lookup coordinates if they are missing (e.g. user typed manually but didn't click suggestion)
    useEffect(() => {
        if (formData.bookingType === 'housecall' && formData.address && (!formData.lat || !formData.lon)) {
            const timeoutId = setTimeout(async () => {
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(formData.address)}&limit=1&countrycodes=za`
                    );
                    const data = await response.json();
                    if (data && data.length > 0) {
                        const { lat, lon } = data[0];
                        handleAddressChange(formData.address, lat, lon);
                    }
                } catch (error) {
                    console.error("Error auto-looking up address:", error);
                }
            }, 1000); // 1 second debounce
            return () => clearTimeout(timeoutId);
        }
    }, [formData.address, formData.bookingType]);

    const handleAddressChange = (address: string, lat?: string, lon?: string) => {
        setFormData(prev => ({ ...prev, address, lat: lat || "", lon: lon || "" }));
        
        if (lat && lon) {
            const distance = calculateDistance(
                SALON_LOCATION.lat, 
                SALON_LOCATION.lon, 
                parseFloat(lat), 
                parseFloat(lon)
            );
            const fee = calculateTravelFee(distance);
            setTravelFee({ fee, distance: parseFloat(distance.toFixed(1)) });
        } else {
            // Only clear fee if the address itself is cleared
            if (!address) setTravelFee(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.bookingType === 'housecall' && !formData.address) {
            alert("Please provide an address for house call bookings.");
            return;
        }

        const bookingTypeText = formData.bookingType === 'salon' ? "At the Salon" : "House Call";
        const addressText = formData.bookingType === 'housecall' ? `\n*Address:* ${formData.address}` : "";
        const travelFeeText = (formData.bookingType === 'housecall' && travelFee) 
            ? `\n*Travel Fee:* R${travelFee.fee} (${travelFee.distance}km from salon)` 
            : "";
        
        const message = `Hello, I would like to book an appointment.
        
*Booking Type:* ${bookingTypeText}${addressText}${travelFeeText}
*Service:* ${formData.serviceInterest === "Other" ? formData.serviceInterest + " (" + customService + ")" : formData.serviceInterest}
*Name:* ${formData.firstName} ${formData.lastName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Message:* ${formData.message}`;

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
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Service Location Selection */}
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-gray-700 font-sora">
                                Service Location *
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, bookingType: 'salon' }))}
                                    className={`flex items-center gap-4 p-5 border-2 transition-all duration-300 group ${
                                        formData.bookingType === 'salon' 
                                        ? 'border-raspberry bg-raspberry/5' 
                                        : 'border-gray-100 hover:border-raspberry/30'
                                    }`}
                                >
                                    <div className={`p-3 rounded-full transition-colors duration-300 ${
                                        formData.bookingType === 'salon' ? 'bg-raspberry text-white' : 'bg-gray-100 text-gray-400 group-hover:text-raspberry'
                                    }`}>
                                        <Store className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-sora font-semibold text-sm ${formData.bookingType === 'salon' ? 'text-raspberry' : 'text-gray-700'}`}>
                                            At the Salon
                                        </p>
                                        <p className="font-sora text-xs text-gray-500">Visit us at Amen Shopping Centre</p>
                                    </div>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, bookingType: 'housecall' }))}
                                    className={`flex items-center gap-4 p-5 border-2 transition-all duration-300 group ${
                                        formData.bookingType === 'housecall' 
                                        ? 'border-raspberry bg-raspberry/5' 
                                        : 'border-gray-100 hover:border-raspberry/30'
                                    }`}
                                >
                                    <div className={`p-3 rounded-full transition-colors duration-300 ${
                                        formData.bookingType === 'housecall' ? 'bg-raspberry text-white' : 'bg-gray-100 text-gray-400 group-hover:text-raspberry'
                                    }`}>
                                        <Home className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-sora font-semibold text-sm ${formData.bookingType === 'housecall' ? 'text-raspberry' : 'text-gray-700'}`}>
                                            House Call
                                        </p>
                                        <p className="font-sora text-xs text-gray-500">We come to your location</p>
                                    </div>
                                </button>
                            </div>
                        </div>

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

                        <AnimatePresence>
                            {formData.bookingType === 'housecall' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4 overflow-hidden"
                                >
                                    <AddressAutocomplete
                                        value={formData.address}
                                        onChange={handleAddressChange}
                                        label="House Call Address *"
                                        placeholder="Enter the full address for your house call..."
                                    />
                                    
                                    {travelFee && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="p-4 bg-raspberry/5 border border-raspberry/20 rounded-sm flex items-start gap-3"
                                        >
                                            <div className="p-2 bg-raspberry/10 rounded-full text-raspberry">
                                                <Truck className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-raspberry font-sora">
                                                    Travel Fee Estimate: R{travelFee.fee}
                                                </p>
                                                <p className="text-xs text-gray-500 font-sora mt-0.5">
                                                    Distance from Salon: {travelFee.distance} km. This fee will be added to your final service total.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm flex items-start gap-3">
                                        <Info className="w-4 h-4 text-gray-400 mt-0.5" />
                                        <p className="text-[11px] text-gray-500 font-sora leading-relaxed italic">
                                            * House call fees are calculated based on your distance from our salon in Durban CBD. 
                                            Base rate: R100. A minimum service value may be required for long-distance house calls.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

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
