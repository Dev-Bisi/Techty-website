import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-[#F0F8FF]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 space-y-6 text-gray-800 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Message from <span className="text-green-400">Founder</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I would like to take a moment to express my sincere gratitude for
              choosing our IT services. As the founder of this company, I am
              proud to say that we are committed to providing the best possible
              solutions for your business needs.
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              We understand the challenges that come with managing an enterprise
              in the digital age, and we are dedicated to delivering innovative
              and reliable IT services to help you navigate these challenges
              with ease.
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our team of experts is constantly working to improve our services
              and stay up-to-date with the latest technological advancements. We
              strive to provide personalized solutions that cater to your
              specific requirements, ensuring that your business operations run
              smoothly and efficiently.
            </p>
            <p className="text-xl sm:text-2xl font-bold mt-6">John Willians</p>
            <p className="text-gray-600 text-sm sm:text-base">Founder, CEO</p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/Frame about2.png"
            alt="Founder"
            className="rounded-xl shadow-lg w-full sm:w-4/5 md:w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;