import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="font-grotesk bg-[#F0F8FF] px-6 sm:px-10 md:px-20 lg:px-30 py-6 shadow">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <h4 className="font-bold text-lg sm:text-xl md:text-2xl">Techty</h4>
        </motion.div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:flex flex-row gap-6 md:gap-10 items-center"
        >
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition">About</Link>
          <Link to="/service" className="hover:text-green-400 transition">Service</Link>
          <Link to="/blog" className="hover:text-green-400 transition">Blog</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
          <Link
            to="#"
            className="rounded bg-black text-white px-3 py-2 text-sm sm:text-base hover:bg-green-500 transition"
          >
            Request a Free Demo
          </Link>
        </motion.div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 mt-4 sm:hidden"
          >
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/about" className="hover:text-green-400">About</Link>
            <Link to="/service" className="hover:text-green-400">Service</Link>
            <Link to="/blog" className="hover:text-green-400">Blog</Link>
            <Link to="/contact" className="hover:text-green-400">Contact</Link>
            <Link
              to="#"
              className="rounded bg-black text-white px-3 py-2 text-sm hover:bg-green-500 transition"
            >
              Request a Free Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;