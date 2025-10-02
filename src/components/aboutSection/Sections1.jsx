import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Sections1 = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 py-12 bg-[#F0F8FF]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/Frame about1.png"
            alt="About Techty"
            className="rounded-xl shadow-lg w-full max-h-[400px] object-cover md:object-contain"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-gray-800 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              title: (
                <>
                  <span className="text-green-400">About</span> Techty
                </>
              ),
              content:
                "We're constantly pushing the boundaries of what's possible and seeking new ways to improve our services and help our clients achieve their goals.",
            },
            {
              title: "Vision",
              content:
                "Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals.",
            },
            {
              title: "Mission",
              content:
                "We're on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they need to make smart financial decisions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={textVariants}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
              <p className="text-sm md:text-base leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sections1;