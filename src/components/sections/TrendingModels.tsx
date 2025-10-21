"use client";
import React, { useState } from "react";
import ModelCard, { ModelCardData } from "../cards/ModelCard";

type Props = {
  title?: string;
  items: ModelCardData[];
};

export default function TrendingModelsSection({ title = "Top trending models this week", items }: Props) {
  const [filter, setFilter] = useState("All");

  return (
    <section className="px-4 md:px-8 mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-black font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm  rounded-full px-3 py-1"
          >
            <option>All</option>
            <option>Runway</option>
            <option>Editorial</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((m, idx) => (
          <ModelCard key={`${m.name}-${idx}`} data={m} />
        ))}
      </div>
    </section>
  );
}
