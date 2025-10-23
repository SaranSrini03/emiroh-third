"use client";
import React from "react";
import { GradientButton } from "@/lib/imports";

type Audition = {
  id: number;
  brand: string;
  category: string;
  role: string;
  description: string;
  platform: string;
  date: string;
  time: string;
  gender: string;
  avatar: string;
  href: string;
};

export default function LiveVirtualAudition() {
  const auditions: Audition[] = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    brand: "AVC Lifestyle brand",
    category: "E commerce",
    role: "Film Commercial",
    description: "fashion shoots, TVCs, films, music videos.",
    platform: "Zoom call",
    date: "11/11/2222 - 12/11/1111",
    time: "30 - 40 Min, Schedule your time",
    gender: "Women",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    href: "/model-hub/live-virtual-audition",
  }));

  return (
    <section className="mt-8">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">Join Live Virtual Audition</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {auditions.map((a) => (
            <article key={a.id} className="w-full rounded-[24px] overflow-hidden bg-white shadow-sm">
              {/* Header with avatar and details */}
              <div
                className="relative p-4 text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cfcaff 0%, #cfcaff 25%, #a78bfa 25%, #a78bfa 50%, #6f64e0 50%, #6f64e0 75%, #443bbf 75%, #443bbf 100%)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="h-14 w-14 rounded-full overflow-hidden ring-4 ring-white/40 shadow-md">
                    <img src={a.avatar} alt={a.brand} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="text-base font-semibold leading-tight">{a.brand}</div>
                    <div className="text-xs opacity-95">{a.category}</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-[13px] leading-5">
                  <div>
                    <span className="font-semibold">Project tittle: </span>
                    <span>{a.role}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Date: </span>
                    <span>{a.date}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Time: </span>
                    <span>{a.time}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Gender : </span>
                    <span>{a.gender}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Platform: </span>
                    <span className="font-semibold">{a.platform}</span>
                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-white/50" />
              </div>

              {/* Footer with CTA */}
              <div className="bg-[#EFE6FF] p-5 flex items-center justify-center">
                <button className="px-6 h-11 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-medium shadow hover:opacity-95">
                  Book a Slot
                </button>
              </div>
            </article>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <GradientButton href="/model-hub/live-virtual-applicants" label="See more" width="w-32 h-9" colors="bg-slate-200 text-gray-800 hover:opacity-90" />
      </div>
    </section>
  );
}
