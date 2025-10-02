import React from "react";
import { Megaphone, Briefcase, TrendingUp, Monitor } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Megaphone size={30} className="text-white" />,
      title: "Online Marketing",
      description:
        "In the new era of technology we look in the future with certainty and pride.",
    },
    {
      icon: <Briefcase size={30} className="text-white" />,
      title: "Startup Business",
      description:
        "In the new era of technology we look in the future with certainty and pride.",
    },
    {
      icon: <TrendingUp size={30} className="text-white" />,
      title: "Business Growth",
      description:
        "In the new era of technology we look in the future with certainty and pride.",
    },
    {
      icon: <Monitor size={30} className="text-white" />,
      title: "Development",
      description:
        "In the new era of technology we look in the future with certainty and pride.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          We provide the best{" "}
          <span className="text-green-400">service</span> solutions.
        </h2>
        <p className="text-gray-600 mt-4">
          We're constantly pushing the boundaries of what's possible and seeking
          new ways to improve our services and help our clients achieve their
          goals.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="bg-green-400 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

            {/* Arrow */}
            <a href="">
              <span className="text-green-400 font-bold text-xl">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}