"use client";

import React from "react";

type InputProps = { value: string; onChange: (v: string) => void; placeholder?: string };
export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-indigo-400"
    />
  );
}
