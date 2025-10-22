"use client";
import React, { useState } from "react";
import { SecondaryNavbar, CastingGrid, GradientButton, CreateGigForm } from "@/lib/imports";
import { CASTINGS } from "@/data/casting/globaldata";
import DarkCastingGrid from "@/components/sections/DarkCastingGrid";

export default function Page() {
  const [openGigModal, setOpenGigModal] = useState(false);
  const auditions = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    brand: "ABC Lifestyle brand",
    role: "Female • Commercial",
    description:
      "We are inviting models to book a Live Virtual Audition slot to showcase their talent.",
    platform: "Zoom call",
    date: "Tomorrow, 3pm",
    href: "/model-hub/live-virtual-audition",
  }));

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setOpenGigModal(true)}
            className="h-9 rounded-full bg-slate-200 px-4 text-sm font-medium text-gray-800 hover:opacity-90"
          >
            Elite Model Circle
          </button>
          <GradientButton href="/application-status" label="View application status" width="w-auto px-4 h-9" colors="bg-orange-400 text-white hover:opacity-90" />
        </div>

        {/* Join Live Virtual Audition */}
        <section className="mt-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Join Live Virtual Audition</h2>
          <div className="mt-4 overflow-x-auto">
            <div className="flex gap-5 min-w-max">
              {auditions.map((a) => (
                <div
                  key={a.id}
                  className="relative w-72 shrink-0 rounded-2xl p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-500 text-white shadow-sm"
                >
                  <div className="text-xs opacity-90">{a.brand}</div>
                  <div className="mt-1 text-sm font-semibold">{a.role}</div>
                  <div className="mt-2 text-[13px] leading-5 opacity-95">
                    {a.description}
                  </div>
                  <ul className="mt-3 space-y-1 text-[12px] opacity-95">
                    <li>Platform: {a.platform}</li>
                    <li>Time: {a.date}</li>
                  </ul>
                  <div className="mt-4">
                    <GradientButton href={a.href} label="Book a Slot" width="w-full h-9" colors="bg-white text-indigo-700 hover:opacity-95" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <GradientButton href="/model-hub/live-virtual-applicants" label="See more" width="w-32 h-9" colors="bg-slate-200 text-gray-800 hover:opacity-90" />
          </div>
        </section>

        {/* Casting Call from Brands */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Casting Call from Brands</h2>
            <div className="flex items-center gap-3">
              <select className="h-9 rounded-full border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none">
                <option>Type</option>
                <option>Photoshoot</option>
                <option>Runway</option>
                <option>Commercial</option>
              </select>
              <select className="h-9 rounded-full border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none">
                <option>Location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <DarkCastingGrid title="" items={CASTINGS} href="/model-hub/cast-application" />
          </div>

          <div className="flex justify-center mt-6">
            <GradientButton href="/model-hub" label="See more" width="w-32 h-9" colors="bg-slate-200 text-gray-800 hover:opacity-90" />
          </div>
        </section>
      </main>

      {/* Create Gig Modal */}
      {openGigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpenGigModal(false)} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-5 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between bg-white ">
              <h3 className="text-lg font-semibold text-gray-900">Create a Elite Model Gig</h3>
              <button
                aria-label="Close"
                onClick={() => setOpenGigModal(false)}
                className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
              >
                ✕
              </button>
            </div>
            <CreateGigForm className="mt-4 " ctaHref="/model-view" ctaLabel="Create a Gig" />
          </div>
        </div>
      )}

      <div className="h-10" />
    </div>
  );
}

