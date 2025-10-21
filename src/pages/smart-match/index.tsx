// app/page.tsx
"use client";
import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import CampaignCard, { Campaign } from "@/components/cards/CampaignCard";
import GradientButton from "@/components/buttons/GradientButton";
import Pagination from "@/components/misc/Pagination";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import AffiliateHeader from "@/components/layout/AffiliateHeader";

export default function AffiliateDashboard() {


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const campaigns: Campaign[] = Array(20)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      product: "4G Jeans",
      campaignName: `Men’s Wear Collection ${i + 1}`,
      budget: "₹40,000",
      startDate: "25 Aug 2024",
      endDate: "25 Sep 2024",
      keyInsight: "High engagement in urban areas 18-25",
      influencers: 10,
      postedOn: "2024-08-20",
    }));

  // Pagination logic
  const totalPages = Math.ceil(campaigns.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentCampaigns = campaigns.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav */}
      <SecondaryNavbar />

      {/* Header */}
      <div className="p-6">

        <AffiliateHeader showSmartMatching={false} />
        {/* Recent Campaigns */}
        <div className="flex items-center justify-between mt-6 mb-10">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 border-b border-black pb-2">
            Pick Your Brand
          </h2>

          <GradientButton
            label={
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-black" />
                <span className="text-black font-medium">Filters</span>
              </div>
            }
            width="w-auto"
            colors="bg-white hover:bg-gray-100"
            className="text-sm px-4 py-2 border border-gray-300 rounded-md transition-colors"
            onClick={() => console.log("Open filters")}
          />
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentCampaigns.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
