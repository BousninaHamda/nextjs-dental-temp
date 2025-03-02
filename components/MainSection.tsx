'use client';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import SubSection from './SubSection';
import { motion } from 'framer-motion';

function MainSection() {
  return (
    <div>
      <div className="relative w-full">
        <Image
          src="/whiteSmile.png"
          alt="Hero Image"
          width={600} // Adjust based on your needs
          height={150}
          className="absolute top-0 right-0 md:right-10 w-full md:w-2/3 h-[40rem] object-cover"
          quality={100}
          priority
        />
        <Image
          src="/whiteSmileOverlays.png"
          alt="Hero Image"
          width={600} // Adjust based on your needs
          height={100}
          className="absolute top-0 right-10 w-2/3 md:w-2/3 h-[40rem] sm:w-full object-cover hidden md:block"
          quality={100}
          priority
        />
        <div className="hidden md:block absolute top-50 right-0 transform -translate-y-1/2 p-2 rounded-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-red-600 hover:text-red-800 transition" />
            </a>
          </div>
        </div>
        <div className="absolute top-70 left-0 transform -translate-y-1/2 p-8 md:p-16 space-y-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl max-w-5xs md:max-w-2xl md:text-6xl font-bold text-black">
              Treat yourself with beatutiful,
              <span className="text-slate-400">white</span> smile.
            </h1>
            <p className="hidden md:block text-lg md:text-xl text-black mb-20">
              We provide the best dental care services for you and your family.
            </p>
          </motion.div>
          <div className="mt-15">
            <SubSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
