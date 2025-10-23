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

      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((c) => (
          <article key={c.id} className="rounded-[28px] overflow-hidden bg-white shadow-sm border border-gray-200">
            {/* Top image */}
            <div className="relative h-32 sm:h-36">
              <img
                src="/images/launch-product/image3.jpg"
                alt={c.title}
                className="h-full w-full object-cover"
              />
              <a
                href={href ? `${href}/${c.id}` : getViewApplicationHref(c)}
                className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full bg-white/90 text-indigo-900 text-sm font-semibold px-4 py-1.5 shadow"
              >
                View
              </a>
            </div>

            {/* Body */}
            <div className="px-5 pt-4 pb-6">
              {/* Brand row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img src={c.avatar} alt={c.brand} className="h-full w-full object-cover" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-medium text-gray-900">{c.brand}</div>
                    <div className="text-[11px] text-gray-500">E commerce • Posted on 25th jan 2025</div>
                  </div>
                </div>
                <button aria-label="Share" className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/>
                    <path d="M16 6l-4-4-4 4"/>
                    <path d="M12 2v14"/>
                  </svg>
                </button>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-[20px] font-extrabold text-gray-900 leading-snug">{c.title}</h3>

              {/* Details list */}
              <dl className="mt-3 space-y-1.5 text-[13px]">
                <div className="flex gap-2"><dt className="text-gray-500 w-28">Industry:</dt><dd className="text-gray-800">Fashion</dd></div>
                <div className="flex gap-2"><dt className="text-gray-500 w-28">Location:</dt><dd className="text-gray-800">Mumbai, India</dd></div>
                <div className="flex gap-2"><dt className="text-gray-500 w-28">Casting Type:</dt><dd className="text-gray-800">In-person / Virtual</dd></div>
                <div className="flex gap-2"><dt className="text-gray-500 w-28">Role:</dt><dd className="text-gray-800">Female</dd></div>
                <div className="flex gap-2"><dt className="text-gray-500 w-28">Deadline:</dt><dd className="text-gray-800">20/02/2025</dd></div>
              </dl>
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

