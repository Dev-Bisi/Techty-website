import React from "react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const handleHireClick = (packageName, price) => {
    alert(`You selected the ${packageName} package at $${price}/hour`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-blue-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        We have the best{" "}
        <span className="text-green-500">pricing</span> package for you
      </h2>

      {/* Cards container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* On Demand Card */}
        <motion.div
          className="flex flex-col justify-between bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">On Demand</h3>
            <p className="text-gray-500 mb-4">
              Get all these features when you are using as starter.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-gray-800">Unlimited Projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-gray-800">Analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">✖</span>
                <span className="text-gray-400">Email notifications</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col items-center bg-blue-100 p-4 rounded-lg">
            <span className="text-gray-600 mb-1">Quick Solutions</span>
            <span className="text-2xl font-bold mb-2">$20/hour</span>
            <motion.button
              onClick={() => handleHireClick("On Demand", 20)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md mt-2"
              whileTap={{ scale: 0.95 }}
            >
              Hire an Expert
            </motion.button>
          </div>
        </motion.div>

        {/* Maintenance Card */}
        <motion.div
          className="flex flex-col justify-between bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
            <p className="text-gray-500 mb-4">
              Get all these features when you are using as starter.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-gray-800">Unlimited Projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-gray-800">Analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">✖</span>
                <span className="text-gray-400">Insights panel</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">✖</span>
                <span className="text-gray-400">Email notifications</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col items-center bg-blue-100 p-4 rounded-lg">
            <span className="text-gray-600 mb-1">Monthly Solutions</span>
            <span className="text-2xl font-bold mb-2">$99/hour</span>
            <motion.button
              onClick={() => handleHireClick("Maintenance", 99)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md mt-2"
              whileTap={{ scale: 0.95 }}
            >
              Hire an Expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}