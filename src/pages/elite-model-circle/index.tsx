"use client";
import React, { useMemo, useState } from "react";
import { SecondaryNavbar, ApplicationCard, type Application } from "@/lib/imports";

const APPS: Application[] = new Array(12).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Amanda Rothbard",
  role: "Commercial Model",
  avatar: "/images/hero.jpg",
  reach: "5.3M",
  stats: [
    { label: "Age", value: "24" },
    { label: "Weight", value: "56 kg" },
    { label: "Height", value: "5'8" },
    { label: "Bust", value: "34" },
    { label: "Waist", value: "24" },
    { label: "Hips", value: "36" },
  ],
}));

export default function EliteModelCirclePage() {
  const [type, setType] = useState("All");
  const [date, setDate] = useState("Date");

  const items = useMemo(() => APPS, []);

  return (
    <div className="bg-white min-h-screen">
      <SecondaryNavbar />
      <div className="px-4 md:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">All Casting Applications</h1>
          <div className="flex items-center gap-3">
            <select value={type} onChange={(e) => setType(e.target.value)} className="text-sm border border-gray-200 rounded-md px-3 py-1">
              <option>Type</option>
              <option>Runway</option>
              <option>Editorial</option>
            </select>
            <select value={date} onChange={(e) => setDate(e.target.value)} className="text-sm border border-gray-200 rounded-md px-3 py-1">
              <option>Date</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((app) => (
            <ApplicationCard key={app.id} app={app} />
          ))}
        </div>

        {/* See more */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">See more</button>
        </div>
      </div>
    </div>
  );
}

