"use client";
import React, { useState } from "react";
import { SecondaryNavbar, CastingGrid, GradientButton, CreateGigForm } from "@/lib/imports";
import { CASTINGS } from "@/data/casting/globaldata";
import DarkCastingGrid from "@/components/sections/DarkCastingGrid";
import LiveVirtualAudition from "@/components/sections/LiveVirtualAudition";

export default function Page() {
  const [openGigModal, setOpenGigModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header buttons */}
        <div className="flex justify-end gap-3">
          <GradientButton
            onClick={() => setOpenGigModal(true)}
            label="Elite Model Circle"
            width="w-auto px-4 h-9"
            variant="horizontal"
            className="text-sm !font-medium"
          />
          <GradientButton href="/application-status" label="View application status" width="w-auto px-4 h-9" colors="bg-red-600 text-white hover:opacity-90" />
        </div>

        {/* Join Live Virtual Audition */}
        <LiveVirtualAudition />

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

