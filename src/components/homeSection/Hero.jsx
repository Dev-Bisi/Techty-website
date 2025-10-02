import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className="bg-[#F0F8FF] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-14"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center gap-8 md:gap-12">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 text-center md:text-center lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
            Secure <span className="text-green-400">business</span>
            <br />
            with Techty security.
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
            We have considered our solutions to support every stage of your
            growth. We are the fastest and easiest way to launch an attractive
            and feature-complete SaaS showcase.
          </p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="#"
              className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-green-400 transition text-center"
            >
              Request a Free Demo
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-green-400 transition text-center"
            >
              Hire an expert
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.img
            src="/Frame 14.png"
            alt="Techty Hero"
            className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-full rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Trustpilot Section */}
      <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
        <span className="text-green-600 font-extrabold text-lg md:text-xl">★</span>
        <span className="text-gray-700 font-bold text-base md:text-lg">Trustpilot</span>
        <span className="text-yellow-600 text-base md:text-lg">★★★★★</span>
        <span className="text-gray-700 text-sm md:text-base">4800+ • 5 stars</span>
      </div>

      {/* Scrolling Logos Section */}
      <div className="py-6">
        <hr className="border-t border-gray-300 my-6" />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <motion.div
            className="md:w-1/3 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-snug">
              Thousands of <br /> businesses use Techty
            </h2>
          </motion.div>

          {/* Logo Scroller */}
          <div className="md:w-2/3 overflow-hidden">
            <motion.div
              className="flex space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              <img src="/Logo1.png" alt="logo" className="h-6 sm:h-7 md:h-8 w-auto" />
              <img src="/logo2.png" alt="logo" className="h-6 sm:h-7 md:h-8 w-auto" />
              <img src="/Logo3.png" alt="logo" className="h-6 sm:h-7 md:h-8 w-auto" />
              <img src="/Logo4.png" alt="logo" className="h-6 sm:h-7 md:h-8 w-auto" />
              <img src="/logo2.png" alt="logo" className="h-6 sm:h-7 md:h-8 w-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;