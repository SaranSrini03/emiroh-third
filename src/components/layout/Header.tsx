"use client";

import { useState, Search } from "@/lib/imports";

export default function DeprecatedCampaignHeader() {
  const [sortBy, setSortBy] = useState("Name");

  return (
    <div className="w-full py-4 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 max-w-8xl mx-auto">
        {/* Left Side */}
        <div className="w-full mt-5 md:w-auto">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Beauty campaigns</h1>
          <p className="text-sm text-gray-500 mt-1">Dec 21st - Jan 15th</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 text-black pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none w-full"
            />
            <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center text-sm text-gray-600 w-full sm:w-auto">
            <span className="mr-2 whitespace-nowrap">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg text-left px-4 sm:px-8 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none w-full sm:w-auto"
            >
              <option value="Name">Name</option>
              <option value="Date">Date</option>
              <option value="Status">Status</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}