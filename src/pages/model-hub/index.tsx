"use client";
import React, { useMemo, useState } from "react";
import { SecondaryNavbar, MosaicBanner, CastingRequests, TrendingModelsSection, GradientButton } from "@/lib/imports";

type Casting = {
    id: number;
    brand: string;
    title: string;
    avatar: string;
    verified?: boolean;
    tags: string[];
};

type Model = {
    id: number;
    name: string;
    tag?: string;
    img: string;
    stats: { key: string; value: string }[];
};

const CASTINGS: Casting[] = [
    {
        id: 1,
        brand: "Amanda Rothbard",
        title: "Summer Fashion Shoot - 2025",
        avatar: "/images/hero.jpg",
        verified: true,
        tags: ["Paid", "NYC", "Female"],
    },
    {
        id: 2,
        brand: "Amanda Rothbard",
        title: "Summer Fashion Shoot - 2025",
        avatar: "/images/hero.jpg",
        verified: true,
        tags: ["Paid", "NYC", "Female"],
    },
    {
        id: 3,
        brand: "Amanda Rothbard",
        title: "Summer Fashion Shoot - 2025",
        avatar: "/images/hero.jpg",
        verified: true,
        tags: ["Paid", "NYC", "Female"],
    },
    {
        id: 4,
        brand: "Amanda Rothbard",
        title: "Summer Fashion Shoot - 2025",
        avatar: "/images/hero.jpg",
        verified: true,
        tags: ["Paid", "NYC", "Female"],
    },
];

const MODELS: Model[] = new Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    name: "Olivia Rhye",
    tag: i % 2 === 0 ? "Rising Talent" : "New Face",
    img: `/images/hero.jpg`,
    stats: [
        { key: "Age", value: "24" },
        { key: "Height", value: "5'9" },
        { key: "Bust", value: "34" },
        { key: "Waist", value: "24" },
        { key: "Hips", value: "36" },
        { key: "Shoe Size", value: "8" },
    ],
}));

export default function ModelHubPage() {
    const [query, setQuery] = useState("");

    const filteredModels = useMemo(() => {
        const q = query.toLowerCase();
        return MODELS.filter((m) => m.name.toLowerCase().includes(q));
    }, [query]);

    return (
        <div className="bg-white min-h-screen">
            <SecondaryNavbar />

            {/* Top chips and action */}
            {/* Mosaic banner */}
            <div className="flex flex-wrap items-center gap-3 justify-end  p-10">
                <GradientButton href="/model-hub/live-virtual-audition" label="Host Live Virtual Audition" colors="bg-gradient-to-r from-red-600 to-red-400 text-white hover:opacity-90" width="w-auto" />
                <GradientButton href="/model-hub/cast-calling-form" label="Host Calling Calls" colors="bg-gradient-to-r from-red-600 to-red-400 text-white hover:opacity-90" width="w-auto" />
                <GradientButton href="/model-hub/cast-applicants" label="View Casting Applicants" colors="bg-gradient-to-r from-red-600 to-red-400 text-white hover:opacity-90" width="w-auto" />
                <GradientButton href="/model-hub/live-virtual-applicants" label="View Live Virtual Application" colors="bg-gradient-to-r from-red-600 to-red-400 text-white hover:opacity-90" width="w-auto" />
            </div>

            <MosaicBanner src="/images/mosaicbanner.png" alt="Mosaic banner" className="px-4 md:px-8 mt-6 shadow-none" />
            <div className="w-full flex justify-center">
                <GradientButton label="Elite Model Circle" variant="horizontal" href="/elite-model-circle" />
            </div>
            {/* Latest casting requests */}
            <div className="p-5">
                <CastingRequests items={CASTINGS} />
                <TrendingModelsSection items={filteredModels} />
            </div>

            {/* Top trending models */}

            <div className="h-10" />
        </div>
    );
}

