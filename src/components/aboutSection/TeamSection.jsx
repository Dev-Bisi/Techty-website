import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay each child animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring" },
  },
};

function TeamSection() {
  const team = [
    { role: "Project Manager", img: "/Frame about1.png" },
    { role: "Software Developer", img: "/Frame about1.png" },
    { role: "UI/UX Designer", img: "/Frame about1.png" },
    { role: "QA Tester", img: "/Frame about1.png" },
  ];

  return (
    <section className="mb-20 px-6 md:px-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="py-10 leading-snug">
            Our team behind all <br className="hidden sm:block" />
            The success we have.
          </h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, i) => (
            <motion.div key={i} variants={cardVariants}>
              <div className="bg-white shadow-md rounded-xl overflow-hidden mb-5 hover:shadow-xl transition duration-300">
                <img
                  src={member.img}
                  alt={member.role}
                  className="w-full h-56 md:h-64 object-cover transform transition duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                {member.role}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;