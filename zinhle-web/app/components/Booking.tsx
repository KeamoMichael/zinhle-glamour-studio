"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const Booking = () => {
  return (
    <>
      {/* Booking CTA Section */}
      <section id="book" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-normal text-raspberry mb-5 font-galafera leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Ready to Book your
            <br />
            Appointment?
          </motion.h2>
          <motion.p
            className="text-gray-700 font-sora text-sm md:text-base mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Secure your spot today and we will be in contact with you promptly.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/services#book-service"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-raspberry border border-raspberry text-xs font-medium font-sora tracking-wider transition-all duration-300 hover:bg-raspberry hover:text-white group"
            >
              <span className="transition-colors duration-300">Book A Consultation</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Deposit Notice Banner */}
      <motion.div
        className="bg-gradient-to-r from-raspberry to-pink-600 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-white">
            <Info className="w-5 h-5 text-white" />
            <p className="text-xs sm:text-sm font-sora">
              Please note: A deposit will be required to confirm your booking.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Booking;

