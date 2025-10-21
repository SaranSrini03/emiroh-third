"use client";
import { useState, useEffect } from "@/lib/imports";

// Reusable hook for number counting
function useCountUp(end: number, duration = 1) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 5000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

// Format number into K / M / B
function formatNumber(num: number): string {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}

type Stat = { value: number; label: string };

// ✅ Individual stat component
function StatCard({ stat }: { stat: Stat }) {
  const count = useCountUp(stat.value, 2);

  return (
    <div className="border rounded-lg p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition">
      <div className="text-3xl text-black font-semibold">{formatNumber(count)}</div>
      <div className="text-gray-500 text-sm">{stat.label}</div>
    </div>
  );
}

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((stat, idx) => (
        <StatCard key={idx} stat={stat} />
      ))}
    </div>
  );
}
