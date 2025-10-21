"use client";

import { Filter } from "lucide-react";
import GradientButton from "@/components/buttons/GradientButton";

interface FilterButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  colors?: string; // optional custom color override
}

export default function FilterButton({
  onClick,
  label = "Filters",
  className = "", 
  colors,
}: FilterButtonProps) {
  // Default white background + black text
  const defaultColors =
    "bg-white text-black border border-gray-300 hover:bg-gray-100";

  return (
    <GradientButton
      onClick={onClick}
      label={
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-black" />
          <span className="font-medium">{label}</span>
        </div>
      }
      colors={colors || defaultColors}
      className={`!rounded-lg ${className}`}
      width="px-4 py-2"
    />
  );
}
