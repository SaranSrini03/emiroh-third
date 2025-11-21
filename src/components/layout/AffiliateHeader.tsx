import { GradientButton } from "@/lib/imports";
import React from "react";

type AffiliateHeaderProps = {
  /** Custom title (default: "Affiliate Products") */
  title?: string;
  showSmartMatching?: boolean;
  showDashboard?: boolean;
};

export default function AffiliateHeader({
  title = "Affiliate Products",
  showSmartMatching = true,
  showDashboard = true,
}: AffiliateHeaderProps) {
  return (
    <div className="pl-8 pr-8 flex justify-between items-center mt-10 border-b border-gray-300 pb-10">
      <h1 className="text-2xl font-semibold text-black">{title}</h1>
      <div className="flex gap-2">
        {showSmartMatching && (
          <GradientButton label="Smart Matching" href="/smart-match" />
        )}
        {showDashboard && (
          <GradientButton label="Dashboard" href="/hub/dashboard" />
        )}
      </div>
    </div>
  );
}
