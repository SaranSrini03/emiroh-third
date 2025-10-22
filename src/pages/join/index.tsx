"use client";

import { useState } from "react";
import BrandDetails from "../../components/join/BrandDetails";
import InfluencerDetails from "../../components/join/InfluencerDetails";
import GradientButton from "../../components/buttons/GradientButton";

export default function JoinPage() {
  const [role, setRole] = useState<"brand" | "influencer">("brand");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted");
    
    // handle submit later
  };

  const isBrand = role === "brand";

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
          Affiliate Program
        </h1>

        {/* Tabs - Slider Toggle */}
        <div className="mt-4 flex justify-center">
          <div className="relative w-64 rounded-full bg-gray-200 p-1">
            <span
              className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#2f4a8a] transition-transform duration-200 ${role === "influencer" ? "translate-x-full" : "translate-x-0"
                }`}
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => setRole("brand")}
              className={`relative z-10 w-1/2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${role === "brand" ? "text-white" : "text-gray-700"
                }`}
              aria-pressed={role === "brand"}
            >
              Brand
            </button>
            <button
              type="button"
              onClick={() => setRole("influencer")}
              className={`relative z-10 w-1/2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${role === "influencer" ? "text-white" : "text-gray-700"
                }`}
              aria-pressed={role === "influencer"}
            >
              Influencer
            </button>
          </div>
        </div>

        {/* key resets uncontrolled fields when switching roles */}
        <form key={role} onSubmit={onSubmit} className="mt-8 space-y-8">
          {/* Role-Specific Details */}
          {isBrand ? <BrandDetails /> : <InfluencerDetails />}

          {/* Contact Information */}


          {/* Affiliate / Partnership Setup */}


          {/* Submit */}
          <div className="pt-2">
            <div className="flex justify-center">
              <GradientButton
                label="Submit"
                width="w-[200px] h-[44px]"
                colors="bg-gradient-to-r from-[#2f4a8a] to-[#4c6cb3] text-white hover:opacity-90"
                type="submit"
                href="/affiliate-page"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
