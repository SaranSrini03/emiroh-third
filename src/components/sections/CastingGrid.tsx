"use client";
import React, { useMemo, useState } from "react";
import GradientButton from "../buttons/GradientButton";
import type { Casting } from "@/data/casting/globaldata";

type Props = {
  title?: string;
  items: Casting[];
  href?: string;
};

/** Reusable href generator for the "View Application" button */
export const getViewApplicationHref = (c: Casting) => `/casting/${c.id}`;

export default function CastingGrid({ title = "All Casting Applications", items, href }: Props) {
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [limit, setLimit] = useState<number>(12);

  const filtered = useMemo(() => {
    let out = items;
    if (typeFilter) {
      out = out.filter((c) => c.tags.some((t) => t.toLowerCase() === typeFilter));
    }
    // dateFilter placeholder; no dates in mock, so keep as-is.
    return out.slice(0, limit);
  }, [items, typeFilter, dateFilter, limit]);

  return (
    <section className="px-4 md:px-8 mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-black font-semibold">{title}</h2>
        <div className="flex gap-3">
          <select
            aria-label="Type filter"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Type</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="any">Any</option>
            <option value="remote">Remote</option>
          </select>
          <select
            aria-label="Date filter"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="">Date</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((c) => (
          <article key={c.id} className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
            {/* Top dotted header */}
            <div
              className="relative h-24"
              style={{
                backgroundColor: "#bbf7d0",
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

              {/* Social icons placeholder row to match screenshot spacing */}
              <div className="mt-2 flex items-center gap-4 text-gray-400">
                <span className="inline-block w-4 h-4 rounded-full bg-gray-200" />
                <span className="inline-block w-4 h-4 rounded-full bg-gray-200" />
              </div>

              {/* Subtitle */}
              <div className="mt-2 text-sm text-gray-500">Ramp walk, Commercial Model</div>

              {/* Title */}
              <h3 className="mt-3 w-50 text-xl font-extrabold text-gray-900 leading-tight">{c.title}</h3>

              {/* CTA with reusable href */}
              <a href={href ? `${href}/${c.id}` : getViewApplicationHref(c)} className="mt-4 w-3/4">
                <GradientButton
                  className="w-full rounded-full text-white text-sm py-2 px-4"
                  label={"View Application"}
                  colors="bg-orange-600"
                />
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length < items.length && (
        <div className="flex justify-center mt-10">
          <GradientButton
            label="See more"
            width="w-[120px] h-[36px]"
            colors="bg-gray-100 text-gray-700 hover:opacity-90"
            onClick={() => setLimit((l) => Math.min(l + 12, items.length))}
          />
        </div>
      )}
    </section>
  );
}

