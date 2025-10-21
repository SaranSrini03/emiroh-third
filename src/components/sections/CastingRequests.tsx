"use client";
import React from "react";
import { Twitter } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import GradientButton from "../buttons/GradientButton";

type Casting = {
  id: number;
  brand: string;
  title: string;
  avatar: string;
  verified?: boolean;
  tags: string[];
};

type Props = {
  title?: string;
  items: Casting[];
  seeAllHref?: string;
};

export default function CastingRequests({ title = "Latest casting requests", items, seeAllHref = "#" }: Props) {
  return (
    <section className="px-4 md:px-8 mt-10 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-black font-semibold">{title}</h2>
        <a href={seeAllHref} className="text-sm text-gray-600 hover:text-gray-900">
          See all
        </a>
      </div>
      <div className="mt-6 h-90  grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-6 overflow-x-auto pb-2">
        {items.map((c) => (
          <article key={c.id} className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
            {/* Top dotted header */}
            <div
              className="relative h-24"
              style={{
                backgroundColor: "#bbf7d0", // green-200
                backgroundImage: "radial-gradient(#10b981 1.5px, transparent 1.5px)",
                backgroundSize: "18px 18px",
              }}
            />

            {/* Main content */}
            <div className="px-5 pb-5 -mt-9 flex flex-col items-center text-center">
              {/* Avatar overlapping */}
              <div className="h-14 w-14 rounded-full overflow-hidden ring-4 ring-white shadow-sm z-40">
                <img src={c.avatar} alt={c.brand} className="h-full w-full object-cover" />
              </div>

              {/* Brand + verified */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-base font-semibold text-gray-900">{c.brand}</span>
                {c.verified && (
                  <svg className="text-blue-500" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
                  </svg>
                )}
              </div>

              {/* Social icons */}
              <div className="mt-2 flex items-center gap-4 text-gray-400">
                <Twitter size={18} />
                <FaInstagram size={18} />
              </div>

              {/* Subtitle */}
              <div className="mt-2 text-sm text-gray-500">Ramp walk, Commercial Model</div>

              {/* Title */}
              <h3 className="mt-3 w-50 text-xl font-extrabold text-gray-900 leading-tight">
                {c.title}
              </h3>

              {/* CTA */}
              <GradientButton
                className="mt-4 w-3/4 rounded-full text-white text-sm py-2 px-4"
                label={"View Application"}
                colors="bg-orange-600"
     
              />
                
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
