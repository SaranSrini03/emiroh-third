"use client";
import React from "react";
import GradientButton from "@/components/buttons/GradientButton";

type Props = {
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CreateGigForm({ className = "", ctaHref = "/model-hub", ctaLabel = "Create a Gig" }: Props) {
  return (
    <form className={`mt-2 space-y-6  ${className}`}>
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800  ">Age</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Have you worked on paid modeling gigs before?</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">How many years of modeling experience?</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="Shop Promotion, Brand Promotion, Creative Roles" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">How many followers on Instagram, TikTok, or a modeling platform</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">How many verified brands or agencies you have worked?</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Willing to attend scheduled auditions / castings (virtually or in-person)</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Do you Active within the last 3 months on the platform?</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Do you have a professional portfolio (photos & video)? If yes drop a link</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Social Media Followers</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Are you currently signed to any agency or freelance active?</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-800">Social Media Link</label>
        <input className="w-full rounded-md bg-gray-100/70 px-4 py-2 text-sm outline-none ring-1 ring-transparent focus:ring-blue-300 placeholder:text-gray-400" placeholder="fashion" />
      </div>

      <div className="pt-4 flex justify-center">
        <GradientButton href={ctaHref} label={ctaLabel} width="w-56 h-9" variant="horizontal" />
      </div>
    </form>
  );
}
