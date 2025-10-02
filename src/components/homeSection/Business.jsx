import React from "react";

const Business = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Table Section */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            
            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <span className="font-medium text-sm md:text-base">Alex John</span>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-xs md:text-sm">
                <option>Year</option>
              </select>
              <select className="border border-gray-300 rounded px-2 py-1 text-xs md:text-sm">
                <option>Status filter</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="py-2 pr-4">Date</th>
                  <th className="py-2 pr-4">Assessment Date</th>
                  <th className="py-2 pr-4">Amount Due</th>
                  <th className="py-2 pr-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">N/A</td>
                    <td className="py-2">N/A</td>
                    <td className="py-2">N/A</td>
                    <td className="py-2 text-green-600 cursor-pointer">View</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Personalize your business{" "}
            <span className="text-green-400">strategy</span> to reach out.
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Our advisors approach each client individually, so each time we
            select the appropriate insurance for your needs. Thanks to
            conversation, we will adjust the appropriate cover.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">99.7%</h3>
              <p className="text-gray-400 text-xs md:text-sm">Customer Satisfaction</p>
              <div className="flex text-yellow-400 text-sm md:text-base">★★★★★</div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">4X</h3>
              <p className="text-gray-400 text-xs md:text-sm">New Visitors</p>
              <div className="flex text-yellow-400 text-sm md:text-base">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;