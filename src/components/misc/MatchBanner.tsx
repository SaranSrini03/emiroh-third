"use client";

import { X } from "lucide-react"; // lightweight icon library (already available in shadcn setups)
import { useState } from "react";
import GradientButton from "../buttons/GradientButton";

interface MatchBannerProps {
  name: string;
  matchPercent: string;
  description: string;
  onView?: () => void;
  onClose?: () => void; // optional callback when closed
}

export default function MatchBanner({
  name,
  matchPercent,
  description,
  onView,
  onClose,
}: MatchBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div className="relative mt-10 mb-10 bg-[#f0ad9560] text-sm flex justify-between items-start p-5 rounded-md text-gray-800">
      {/* Content + View button inline */}
      <div className="flex flex-wrap items-center gap-2 pr-8">
        <span>
          <b>
            {name} — {matchPercent} Match:
          </b>{" "}
          {description}
        </span>
        <GradientButton
          label="View"
          onClick={onView}
          width="w-20"
          className="!px-3 ml-10 !py-1 text-xs"
          colors="bg-blue-900 text-white hover:opacity-90"
        />

        {/* Close (X) button */}
        <GradientButton
          onClick={handleClose}
          label={<X size={14} />} // icon instead of text
          width="w-6 h-6" // small round button
          className="!p-0 flex items-center justify-center rounded-full absolute top-2 right-2"
          colors="bg-black text-white hover:opacity-90"
        />
      </div>
    </div>
  );
}
