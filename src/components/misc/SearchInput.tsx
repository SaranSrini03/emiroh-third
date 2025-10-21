"use client";
import React from "react";
import { Search } from "lucide-react";

export default function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="border border-gray-200 rounded-lg w-full px-3 py-2 text-sm pl-9"
      />
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
    </div>
  );
}
