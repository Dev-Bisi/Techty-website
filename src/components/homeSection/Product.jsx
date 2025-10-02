import React, { useState } from "react";
import { motion } from "framer-motion";

const Product = () => {
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
      image: "/Frame 003.png",
    },
    {
      id: "analyze",
      number: "03",
      title: "Finalize Product",
      description: "Finalizing the product to meet the highest standards.",
      content:
        "Finalize the product for production to be done, ensuring quality and functionality meet the highest standards.",
      image: "/Frame 002.png",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20">
      <div className="rounded-xl overflow-hidden w-full max-w-6xl p-6 md:p-10 lg:p-12">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <h2 className="py-6 md:py-10">
            Empower your business <br />
            with cutting-edge <span className="text-green-400">solutions.</span>
          </h2>
        </motion.div>

        {/* Tabs Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              whileHover={{ scale: 1.03 }}
              className={`flex-1 p-4 md:p-6 cursor-pointer transition-all duration-300 rounded-lg border 
                ${
                  activeTab === tab.id
                    ? "border-green-500 bg-green-50 text-green-600 font-semibold"
                    : "border-gray-200 bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-start md:items-center">
                <span
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold mr-3 md:mr-4 ${
                    activeTab === tab.id ? "text-green-500" : "text-black"
                  }`}
                >
                  {tab.number}
                </span>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1">
                    {tab.title}
                  </h3>
                  <p className="text-sm md:text-base">{tab.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Tab Content */}
        <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-2xl shadow p-6 md:p-8"
          >
            {/* Left Image */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={activeTabData.image}
                alt={activeTabData.title}
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                {activeTabData.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                {activeTabData.content}
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-3 md:space-y-4 text-gray-800"
              >
                {[
                  "We collect ideas from different design inspirations.",
                  "Analysis data for any kind of corrections.",
                  "Finalize the product for the production to be done.",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl">
                      <img src="/checkbox-circle-line (1).png" alt="" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 md:mt-8 bg-black hover:bg-green-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Request a Free Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Bottom Section with Cards */}
        <section className="py-12 md:py-16 bg-[#F0F8FF]">
          <motion.div
            className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              
              {/* Left Title */}
              <motion.div variants={fadeInUp} className="md:w-1/4 text-center md:text-left">
                <p className="text-lg md:text-xl font-semibold">
                  <span className="text-emerald-500">Unleash</span> businesses'{" "}
                  <br />
                  full potential
                </p>
              </motion.div>

              {/* Right Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 md:w-3/4">
                {[
                  {
                    img: "/Frame 39 (1).png",
                    title: "SEO Team Expert",
                    desc: "Creating products to meet our user needs and market demands.",
                  },
                  {
                    img: "/Frame 39 (2).png",
                    title: "Strategic Planning",
                    desc: "Improving products to meet our user needs and market demands.",
                  },
                  {
                    img: "/Frame 39.png",
                    title: "24/7 Live Support",
                    desc: "We are ready to help you all day with active support.",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="text-center md:text-left bg-white rounded-lg p-6 shadow-sm"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="rounded-full shadow-lg w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0"
                    />
                    <p className="mt-3 font-semibold text-base md:text-lg mb-3">
                      {card.title}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Product;