"use client";
import React from "react";
import { Twitter, Globe ,BadgeCheck} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import GradientButton from "../buttons/GradientButton";

type Stat = { key: string; value: string };
export type ModelCardData = {
  name: string;
  tag?: string;
  img: string;
  stats: Stat[];
};

type Props = {
  data: ModelCardData;
  onHire?: () => void;
};

export default function ModelCard({ data, onHire }: Props) {
  const { name, tag, img, stats } = data;
  // order stats like mock, if present
  const order = ["Age", "Weight", "Height", "Bust", "Waist", "Hips", "Shoe Size"];
  const statMap = Object.fromEntries(stats.map((s) => [s.key, s.value]));

  return (
    <article className=" rounded-2xl overflow-hidden bg-white">
      <div className="relative">
        <img src={img} alt={name} className="w-full h-72 object-cover" />
        {tag && (
          <span className="absolute top-3 left-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 shadow-sm">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          {/* verified badge */}
          <BadgeCheck className="text-blue-500" size={16} aria-label="Verified" />
        </div>
        <div className="text-sm text-indigo-600 mt-1">Ramp walk Model</div>

        {/* two-row stats grid */}
        <div className="mt-4">
          <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
            {order.slice(0, 4).map((k) => (
              <div key={`lbl-${k}`} className="text-gray-600">{k}</div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm mt-1">
            {order.slice(0, 4).map((k) => (
              <div key={`val-${k}`} className="text-gray-900">{statMap[k] ?? "-"}</div>
            ))}   
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 mt-3">
            {order.slice(4, 7).map((k) => (
              <div key={`lbl2-${k}`} className="text-gray-600">{k}</div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm mt-1">
            {order.slice(4, 7).map((k) => (
              <div key={`val2-${k}`} className="text-gray-900">{statMap[k] ?? "-"}</div>
            ))}
          </div>
        </div>

        <GradientButton
          label="Hire Model"
          width="w-full"
          onClick={onHire}
          colors="bg-gradient-to-r from-orange-500 to-rose-400 text-white hover:opacity-90"
          className="mt-4 text-sm"
        />

        {/* muted socials */}
        <div className="mt-4 flex items-center gap-4 text-gray-400">
          <Twitter size={18} />
          <Globe size={18} />
          <FaInstagram size={18} />
        </div>
      </div>
    </article>
  );
}
