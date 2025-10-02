import React from "react";
import { motion } from "framer-motion";

const BlogSection1 = () => {
  return (
    <section className="bg-gray-200 py-10 px-4">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        <h6 className="text-2xl md:text-4xl font-semibold mb-3">Our Blog</h6>
        <p className="text-sm md:text-base">
          We're constantly pushing the boundaries of what's <br className="hidden md:block" />
          possible and seeking new ways to improve our <br className="hidden md:block" />
          services.
        </p>
      </motion.div>

      {/* Blog Card */}
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Blog Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/Frameblog.png"
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Blog Content */}
        <motion.div
          className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-600 text-sm mb-10">May 30, 2023</p>
          <h2 className="text-lg md:text-xl font-bold mb-3">
            5 reasons why Techty is the go-to choice for small business.
          </h2>
          <p className="text-gray-700 text-sm md:text-base mt-10">
            Let us manage your IT for you so that you can get back to doing what
            you do best.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection1;