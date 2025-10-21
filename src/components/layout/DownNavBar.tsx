// components/Navbar.tsx
"use client";
import GradientButton from "@/components/buttons/GradientButton"

export default function Navbar() {
  const navButtons = [
    "Dashboard",
    "Forum",
    "Collaboration",
    "Models Hub",
    "Nano-Influencers Campaign",
  ];

  return (
    <div className="flex flex-wrap items-center justify-between px-8 py-3 bg-white">
      {/* Left: Search */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-full px-4 py-2 w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
        />
        <div className="absolute right-3 text-gray-400 pointer-events-none">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex flex-wrap gap-3 mt-3 sm:mt-0">
        {navButtons.map((btn, idx) => (
          <GradientButton
            key={idx}
            label={btn}
            colors={
              idx === 0
                ? "bg-red-500 hover:opacity-90"
                : "bg-blue-900 hover:opacity-90"
            }
            width="w-auto"
          />
        ))}

        <GradientButton
          label="Affiliate Program"
          colors="bg-gradient-to-r from-gray-900 to-gray-700 hover:opacity-90"
          width="w-auto"
        />
      </div>
    </div>


  );
}
