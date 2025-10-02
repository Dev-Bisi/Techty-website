import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 120 },
  },
};

const DataFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/users?limit=6");
        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="text-base md:text-lg font-semibold"
        >
          Loading testimonials...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 text-base md:text-lg font-semibold"
        >
          Error: {error}
        </motion.p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen container mx-auto px-4 md:px-8 py-12"
    >
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {users.map((user, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="p-4 sm:p-5 md:p-6 border rounded-2xl shadow-sm flex flex-col gap-4 bg-white"
          >
            {/* Stars */}
            <div className="flex text-yellow-500 text-sm md:text-lg">
              {"★★★★★"}
            </div>

            {/* Testimonial text */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              “We struggled for years to find an IT company that we could trust.
              While others would try to sell us IT solutions, they actually took
              the time to listen to what made us unique as a business.”
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-2">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border"
              />
              <div>
                <p className="font-semibold text-sm md:text-base">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  {user.company?.title || "Professional"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DataFetch;