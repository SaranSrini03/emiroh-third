"use client";
import React from "react";

interface SimpleLineChartPaymentsProps {
  data: { month: string; value: number }[];
  width?: number;
  height?: number;
}

export default function SimpleLineChartPayments({
  data,
  width = 380,
  height = 110,
}: SimpleLineChartPaymentsProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const PADDING = 26;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (width - PADDING * 2) + PADDING;
    const y =
      height -
      PADDING -
      ((d.value - minValue) / (maxValue - minValue || 1)) * (height - PADDING * 2);
    return { x, y, label: d.month };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={width} height={height + 30}>
      {/* Line path */}
      <polyline fill="none" stroke="#800080" strokeWidth="2.5" points={polyline} />

      {/* Data points */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill="#fff" stroke="black" strokeWidth="4" />
          {/* Label below each point */}
          <text
            x={p.x}
            y={height - 2}
            fontSize="10"
            textAnchor="middle"
            fill="#555"
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
