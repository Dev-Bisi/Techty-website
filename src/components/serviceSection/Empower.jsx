import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Empower = () => {
  const [activeTab, setActiveTab] = useState("collect");

  const tabs = [
    {
      id: "collect",
      number: "01",
      title: "Collect Ideas",
      description: "Creating or improving products to meet our user needs.",
      content:
        "We collect ideas from different design inspirations to ensure we have a diverse range of creative solutions for your projects.",
      image: "/Frame 29.png",
    },
    {
      id: "analysis",
      number: "02",
      title: "Data Analysis",
      description:
        "Analyzing product data to discover patterns and improve performance.",
      content:
        "We analyze user data, trends, and market signals to make sure your product is moving in the right direction.",
      image:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    },
    {
      id: "analyze",
      number: "03",
      title: "Finalize Product",
      description: "Finalizing the product to meet the highest standards.",
      content:
        "Finalize the product for production to be done, ensuring quality and functionality meet the highest standards.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 px-6 sm:px-10 lg:px-20">
      <div className="rounded-xl overflow-hidden w-full max-w-6xl p-4 sm:p-8">
        {/* Heading */}
        <div className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          <motion.h2
            className="py-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empower your business <br />
            with cutting-edge{" "}
            <span className="text-green-400">solutions.</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              className={`flex-1 p-6 cursor-pointer transition-all duration-300 rounded-lg shadow-sm
                ${
                  activeTab === tab.id
                    ? "border-b-4 border-green-500 bg-green-50 text-green-600 font-semibold"
                    : "border-b border-gray-200 text-gray-700 bg-white hover:bg-gray-100"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-start">
                <span
                  className={`text-4xl sm:text-5xl font-bold mr-4 ${
                    activeTab === tab.id ? "text-green-500" : "text-black"
                  }`}
                >
                  {tab.number}
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{tab.title}</h3>
                  <p className="text-sm">{tab.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Content */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabData.id}
              className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  className="rounded-2xl w-full h-auto shadow-md"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {activeTabData.title}
                </h2>
                <p className="text-gray-600 mb-6">{activeTabData.content}</p>

                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start gap-3">
                    <img src="/checkbox-circle-line (1).png" alt="" />
                    We collect ideas from different design inspirations.
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/checkbox-circle-line (1).png" alt="" />
                    Analysis data for any kind of corrections.
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/checkbox-circle-line (1).png" alt="" />
                    Finalize the product for the production to be done.
                  </li>
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-black hover:bg-green-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Request a Free Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default Empower;