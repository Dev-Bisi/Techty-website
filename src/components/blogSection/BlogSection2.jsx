import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    date: "May 05, 2023",
    title: "5 reasons why Techty is the go-to choice for small business",
    desc: "Let us manage your IT for you so that you can get back to doing what you do best.",
    img: "/Frame120.png",
  },
  {
    id: 2,
    date: "May 05, 2023",
    title: "The future is now: Explore Techty’s AI-Powered tools",
    desc: "Let us manage your IT for you so that you can get back to doing what you do best.",
    img: "/Frame121.png",
  },
  {
    id: 3,
    date: "May 05, 2023",
    title: "Cybersecurity threats in 2023: How AI can keep you protected",
    desc: "Let us manage your IT for you so that you can get back to doing what you do best.",
    img: "/Frame122.png",
  },
  {
    id: 4,
    date: "May 05, 2023",
    title: "5 reasons why Techty is the go-to choice for small business",
    desc: "Let us manage your IT for you so that you can get back to doing what you do best.",
    img: "/Frame120.png",
  },
  {
    id: 5,
    date: "May 05, 2023",
    title: "The future is now: Explore Techty’s AI-Powered tools",
    desc: "Let us manage your IT for you so that you can get back to doing what you do best.",
    img: "/Frame120.png",
  },
  {
    id: 6,
    date: "May 05, 2023",
    title: "Cybersecurity threats in 2023: How AI can keep you protected",
    desc: "Let us manage your IT for you so that you can get back to doing what you do best.",
    img: "/Frame120.png",
  },
];

export default function Articles() {
  return (
    <div className="py-10 px-4 md:px-20 bg-gray-50">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Read All Articles</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We’re constantly pushing the boundaries of what’s possible and seeking
          new ways to improve our services.
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer 
                       transform transition duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              type: "spring",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="overflow-hidden">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500">{article.date}</p>
              <h3 className="text-lg font-semibold mt-2 text-gray-800 hover:text-green-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-1">{article.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}