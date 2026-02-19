"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Left Side: Logo, Socials, Copyright */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6">
              <div className="relative h-12 w-40">
                <Image
                  src="/assets/Zinhle Glamour Studio_Logo Design (Black01).png"
                  alt="Zinhle Glamour Studio"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-3">
              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@zinahleG"
                target="_blank"
                className="w-8 h-8 rounded-full bg-raspberry flex items-center justify-center text-white hover:bg-black transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.13z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-raspberry flex items-center justify-center text-white hover:bg-black transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Contact Details Vertical Stack */}
          <div className="flex flex-col gap-8 md:text-right md:items-end">
            {/* Studio Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 md:justify-end">
                <MapPin className="text-raspberry" size={18} />
                <h3 className="text-sm font-bold text-black font-sora">Studio Address</h3>
              </div>
              <p className="text-gray-900 font-sora text-xs leading-relaxed">
                Durban CBD, Amen Shopping Centre, 4001
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 md:justify-end">
                <User className="text-raspberry" size={18} />
                <h3 className="text-sm font-bold text-black font-sora">Contact Details</h3>
              </div>
              <div className="space-y-1">
                <p className="text-gray-900 font-sora text-xs">zinhleglamourholding@gmail.com</p>
                <p className="text-gray-900 font-sora text-xs">068 868 8111</p>
              </div>
            </div>

            {/* Tik Tok */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 md:justify-end">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-raspberry">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.13z" />
                </svg>
                <h3 className="text-sm font-bold text-black font-sora">Tik Tok</h3>
              </div>
              <p className="text-xs font-sora">
                <span className="text-raspberry font-bold">Hair by Zee</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-900">@zeehairline0</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Bar */}
        <div className="w-full h-[1px] bg-gray-100 mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sora text-gray-400">
          <p>© 2026 Zinhle Glamour Studio. All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <Image
                src="/assets/GWS - Invoice Profile Image04.png"
                alt="GWS Logo"
                fill
                className="object-contain"
              />
            </div>
            <p>Designed and developed by God Will Supply Studios</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};


export default Footer;

