import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-600 text-white px-6 md:px-12 lg:px-20 py-10"
    >
      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/30"
      >
        <h2 className="text-2xl font-semibold text-center md:text-left">
          Ready to take your business{" "}
          <br className="hidden sm:block" /> to the next level?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md"
        >
          Request a Free Demo
        </motion.button>
      </motion.div>

      {/* Footer Main Content */}
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Logo & Info */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="logo"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="font-semibold text-lg">Techty</span>
          </div>
          <div className="flex space-x-4 mt-4 text-xl">
            {[FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-green-400"
                  href="#"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Copyright © 2023 Techty. <br /> All Rights Reserved
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About", "Services", "Blog", "Contact"].map((link, i) => (
              <li key={i}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-green-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-lg mb-4">Social</h3>
          <ul className="space-y-2">
            {[
              {
                icon: <FaEnvelope />,
                label: "Email",
                href: "mailto:info@techty.com",
              },
              {
                icon: <FaTwitter />,
                label: "Twitter",
                href: "https://twitter.com",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                href: "https://linkedin.com",
              },
              {
                icon: <FaFacebook />,
                label: "Facebook",
                href: "https://facebook.com",
              },
              {
                icon: <FaInstagram />,
                label: "Instagram",
                href: "https://instagram.com",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-lg mb-4">Our Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter to get our news delivered to you.
          </p>
          <form className="flex flex-col sm:flex-row w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none text-white border border-white border-r-0 bg-gray-700"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-b-md sm:rounded-r-md sm:rounded-b-none text-white border border-white border-l-0"
            >
              Join
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;