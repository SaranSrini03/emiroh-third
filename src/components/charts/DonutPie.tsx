// src/components/charts/DonutPieWithLegend.tsx
"use client";

import React, { useState, useMemo } from "react";

export interface DonutData {
  name: string;
  value: number;
  color: string;
}

interface DonutPieWithLegendProps {
  data: DonutData[];
  size?: number;
  strokeWidth?: number;
  showPercentage?: boolean;
  animationDuration?: number;
  hoverEffect?: boolean;
  onSliceClick?: (data: DonutData, index: number) => void;
  className?: string;
  legendPosition?: "right" | "bottom";
  centerLabel?: string | React.ReactNode;
}

export default function DonutPieWithLegend({
  data,
  size = 120,
  strokeWidth = 2,
  showPercentage = true,
  animationDuration = 800,
  hoverEffect = true,
  onSliceClick,
  className = "",
  legendPosition = "right",
  centerLabel,
}: DonutPieWithLegendProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const r = size / 2 - strokeWidth * 2;
  const cx = size / 2;
  const cy = size / 2;

  const { total, processedData } = useMemo(() => {
    const filteredData = data.filter(item => item.value > 0);
    const totalValue = filteredData.reduce((sum, d) => sum + d.value, 0);
    
    const processed = filteredData.map((slice, index) => ({
      ...slice,
      percent: totalValue > 0 ? (slice.value / totalValue) * 100 : 0,
      startAngle: 0,
      endAngle: 0,
      path: "",
    }));

    // Calculate angles and paths
    let acc = 0;
    const processedWithAngles = processed.map((slice) => {
      const startAngle = (acc / 100) * 2 * Math.PI;
      const endAngle = ((acc + slice.percent) / 100) * 2 * Math.PI;
      const path = describeArc(startAngle, endAngle, r, cx, cy);
      acc += slice.percent;
      
      return {
        ...slice,
        startAngle,
        endAngle,
        path,
      };
    });

    return { total: totalValue, processedData: processedWithAngles };
  }, [data, r, cx, cy]);

  function describeArc(
    startAngle: number, 
    endAngle: number, 
    radius: number, 
    centerX: number, 
    centerY: number
  ): string {
    const start = {
      x: centerX + radius * Math.sin(startAngle),
      y: centerY - radius * Math.cos(startAngle),
    };
    const end = {
      x: centerX + radius * Math.sin(endAngle),
      y: centerY - radius * Math.cos(endAngle),
    };
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y,
      "L", centerX, centerY,
      "Z"
    ].join(" ");
  }

  const handleSliceClick = (slice: DonutData, index: number) => {
    onSliceClick?.(slice, index);
  };

  const handleSliceHover = (index: number | null) => {
    if (hoverEffect) {
      setHoveredIndex(index);
    }
  };

  const getHoverTransform = (index: number) => {
    if (hoveredIndex !== index) return "";
    
    const slice = processedData[index];
    const midAngle = (slice.startAngle + slice.endAngle) / 2;
    const distance = 5; // pixels to move on hover
    
    return `translate(${Math.sin(midAngle) * distance}, ${-Math.cos(midAngle) * distance})`;
  };

  if (data.length === 0) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm">No data available</div>
      </div>
    );
  }

  return (
    <div className={`flex ${legendPosition === "bottom" ? "flex-col gap-4" : "items-center gap-6"} ${className}`}>
      {/* Donut SVG Container */}
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <svg 
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`}
          className="transition-all duration-300"
        >
          {/* Optional: Background circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth={strokeWidth}
          />
          
          {/* Donut slices */}
          {processedData.map((slice, index) => (
            <g key={slice.name} transform={getHoverTransform(index)}>
              <path
                d={slice.path}
                fill={slice.color}
                stroke="#fff"
                strokeWidth={strokeWidth}
                className={`transition-all duration-300 ${
                  hoverEffect ? "cursor-pointer hover:opacity-90" : ""
                } ${
                  onSliceClick ? "cursor-pointer" : ""
                }`}
                style={{
                  transition: `transform ${animationDuration / 1000}s ease, opacity 0.2s ease`,
                }}
                onClick={() => handleSliceClick(slice, index)}
                onMouseEnter={() => handleSliceHover(index)}
                onMouseLeave={() => handleSliceHover(null)}
                role="img"
                aria-label={`${slice.name}: ${slice.value} (${slice.percent.toFixed(1)}%)`}
              />
            </g>
          ))}
        </svg>

        {/* Center Label */}
        {centerLabel && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              {typeof centerLabel === "string" ? (
                <span className="text-sm font-medium text-gray-600">{centerLabel}</span>
              ) : (
                centerLabel
              )}
            </div>
          </div>
        )}
      </div>

      {/* Legend / Stats */}
      <div className={`flex flex-col gap-2 ${legendPosition === "bottom" ? "w-full" : ""}`}>
        {processedData.map((slice, index) => (
          <div
            key={slice.name}
            className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
              hoveredIndex === index ? "bg-gray-50 scale-105" : ""
            } ${
              onSliceClick || hoverEffect ? "cursor-pointer" : ""
            }`}
            onClick={() => handleSliceClick(slice, index)}
            onMouseEnter={() => handleSliceHover(index)}
            onMouseLeave={() => handleSliceHover(null)}
          >
            <span 
              className="inline-block w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-sm text-gray-800 font-medium truncate flex-1">
              {slice.name}
            </span>
            {showPercentage && (
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-gray-500 font-medium">
                  {slice.percent.toFixed(1)}%
                </span>
                <span className="text-xs text-gray-400">
                  ({slice.value.toLocaleString()})
                </span>
              </div>
            )}
          </div>
        ))}
        
        {/* Total Summary */}
        {showPercentage && (
          <div className="pt-2 mt-2 border-t border-gray-200">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Total</span>
              <span className="font-medium">{total.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}