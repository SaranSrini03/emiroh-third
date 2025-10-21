"use client";
import React from "react";

export type Application = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  reach: string;
  stats: { label: string; value: string }[];
};

export default function ApplicationCard({ app }: { app: Application }) {
  return (
    <article className="rounded-[22px] border border-gray-200 overflow-hidden bg-white">
      {/* Top striped header */}
      <div
        className="relative h-40"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #b2b3f1 33%, #a78bfa 33%, #a78bfa 66%, #565add 66%)",
        }}
      >
        {/* Elite pill */}
        <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-orange-500 px-3 py-1 rounded-full shadow-sm">
          Elite
        </span>
        {/* avatar with teal ring */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-white p-[5px] shadow">
          <div className="h-full w-full rounded-full bg-teal-400 p-[4px]">
            <div className="h-full w-full rounded-full overflow-hidden ring-4 ring-white">
              <img src={app.avatar} alt={app.name} className="h-full w-full object-cover" />
            </div>
          </div>
          {/* Instagram badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full bg-white p-[3px] shadow-sm">
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="pt-14 px-5 pb-5">
        <div className="flex items-center justify-center gap-2">
          <h3 className="font-semibold text-gray-900 text-lg">{app.name}</h3>
          <svg className="text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
          </svg>
        </div>
        <div className="text-center text-xs text-gray-500 mt-0.5">{app.role}</div>
        <div className="text-center text-sm text-gray-500 mt-2">fashion shoots, TVCs, films, music videos.</div>

        {/* Stats (Age, Gender, Location, Experience) */}
        <div className="mt-4 rounded-xl border  border-gray-100 bg-gray-50 p-4">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">1</span>
                <span className="text-gray-500">Age</span>
              </div>
              <span className="text-gray-900 font-medium">
                {app.stats.find((s) => s.label.toLowerCase() === "age")?.value ?? "25"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">2</span>
                <span className="text-gray-500">Gender</span>
              </div>
              <span className="text-gray-900 font-medium">
                {app.stats.find((s) => s.label.toLowerCase() === "gender")?.value ?? "Female"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">3</span>
                <span className="text-gray-500">Location</span>
              </div>
              <span className="text-gray-900 font-medium">
                {app.stats.find((s) => s.label.toLowerCase() === "location")?.value ?? "Bangalore, Karnataka"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">4</span>
                <span className="text-gray-500">Experience</span>
              </div>
              <span className="text-gray-900 font-medium">
                {app.stats.find((s) => s.label.toLowerCase() === "experience")?.value ?? "4 Years"}
              </span>
            </div>
          </div>
        </div>

        {/* CTA inset container */}
        <div className="mt-4 rounded-xl bg-white p-1 shadow-inner border border-gray-100">
          <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-sm py-2">
            Reach Out
          </button>
        </div>
      </div>
    </article>
  );
}
