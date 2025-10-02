import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // cards animate one after another
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

const Here = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible" // animate when in view
      viewport={{ once: true, amount: 0.2 }} // triggers 20% visible
      variants={containerVariants}
      className="bg-[#F0F8FF] px-4 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-16 md:py-20 text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-8 md:mb-12"
        >
          Here’s our latest <br />
          updates from the{" "}
          <span className="text-green-500">news</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              img: "/Frame 003.png",
              alt: "Laptop and phone",
              title: "5 reasons why Techty is the go-to choice for small business.",
            },
            {
              img: "/Frame 001.png",
              alt: "Man with VR headset",
              title: "The future is now: Explore Techty’s AI-Powered tools",
            },
            {
              img: "/Frame 002.png",
              alt: "Cybersecurity",
              title: "Cybersecurity threats in 2023: How AI can keep you protected",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <motion.img
                src={item.img}
                alt={item.alt}
                className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4 sm:p-6 text-left">
                <p className="text-gray-500 text-xs sm:text-sm mb-2">May 30</p>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Let us manage your IT for you so that you can get back to doing
                  what you do best.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Here;