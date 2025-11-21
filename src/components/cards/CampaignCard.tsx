"use client";

import { ReactNode } from "react";
import Image from "next/image";
import GradientButton from "@/components/buttons/GradientButton";

export interface Campaign {
  influencers: ReactNode;
  postedOn: ReactNode;
  id: number;
  product: string;
  campaignName: string;
  budget: string;
  startDate: string;
  endDate: string;
  keyInsight: string;
  // Optional fields to support richer UI
  companyName?: string;
  category?: string;
  avatarUrl?: string;
  matchPercent?: string | number;
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg border bg-white hover:shadow-2xl duration-300 hover:scale-[1.01] transition-all">
      {/* Top Banner Section */}
      <div
        className="relative h-44 bg-cover bg-center border-b"
        style={{ backgroundImage: `url('/images/cardBG.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40" />

        {/* Posted Date */}
        <p className="absolute top-2 right-3 text-[10px] md:text-xs text-gray-700 bg-white/70 px-2 py-[2px] rounded-full shadow-sm">
          Posted on {campaign.postedOn}
        </p>

        {/* Avatar and company */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="h-16 w-16 rounded-full ring-2 ring-white overflow-hidden shadow-md">
            <Image
              src={typeof campaign.avatarUrl === "string" ? campaign.avatarUrl : "/images/assets/avatars/olivia.jpg"}
              alt={campaign.companyName ?? "Brand avatar"}
              width={64}
              height={64}
            />
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm font-semibold text-gray-900">{campaign.companyName ?? "ABC Lifestyle pvt ltd"}</p>
            <p className="text-xs text-gray-600">{campaign.category ?? "E commerce"}</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="pt-12 px-5 pb-4 text-gray-800 text-sm space-y-2">
        <p><b>Product:</b> {campaign.product}</p>
        <p><b>Campaign Name:</b> {campaign.campaignName}</p>
        <p><b>Numbers of Influencers:</b> {campaign.influencers}</p>
        <p><b>Budget:</b> {campaign.budget}</p>
        <p><b>Duration:</b> Till {campaign.endDate}</p>
        {campaign.matchPercent !== undefined && (
          <p><b>Match %:</b> {campaign.matchPercent}% matched</p>
        )}
        <div>
          <p className="font-bold">Key insight:</p>
          <p className="text-gray-700 leading-snug">{campaign.keyInsight}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-5 pb-5">
        <div className="flex items-center justify-center">
          <GradientButton
            label="Interested"
            width="w-auto"
            colors="bg-blue-900 hover:opacity-90"
            className="px-6 py-2 text-sm"
            href="/launch-product"
            onClick={() => console.log(`Interested in campaign ${campaign.id}`)}
          />
        </div>
      </div>
    </div>
  );
}
