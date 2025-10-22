"use client";
import React from "react";
import { SecondaryNavbar, CastingGrid } from "@/lib/imports";
import { CASTINGS } from "@/data/casting/globaldata";

export default function ModelHubPage() {
  return (
    <div className="bg-white min-h-screen">
      <SecondaryNavbar />

      <div className="p-5">
        <CastingGrid title="All Casting Applications" items={CASTINGS} href={"/model-hub/live-application"} />
      </div>

      <div className="h-10" />
    </div>
  );
}

