// components/charts/LineChart.tsx
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
      tension?: number;
      fill?: boolean;
      pointRadius?: number;
      pointHoverRadius?: number;
      borderDash?: number[];
    }[];
  };
  options?: any;
  height?: number;
  className?: string;
}

const defaultData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "This Year",
      data: [8000, 12000, 18000, 25000, 28000, 23000, 25000, 30000, 32000, 28000, 35000, 40000],
      borderColor: "#4F46E5",
      backgroundColor: "rgba(79, 70, 229, 0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: "#4F46E5",
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
    },
    {
      label: "Last Year",
      data: [10000, 14000, 16000, 20000, 21000, 22000, 27000, 25000, 28000, 30000, 32000, 35000],
      borderColor: "#A3AED0",
      backgroundColor: "rgba(163, 174, 208, 0.05)",
      borderDash: [5, 5],
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: "#A3AED0",
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
    },
  ],
};

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        boxWidth: 12,
        padding: 20,
        usePointStyle: true,
        pointStyle: "circle",
        color: "#1A202C",
        font: {
          size: 13,
          weight: "500" as const,
          family: "'Inter', sans-serif",
        },
      },
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
      backgroundColor: "#FFFFFF",
      titleColor: "#2D3748",
      bodyColor: "#4A5568",
      borderColor: "#E2E8F0",
      borderWidth: 1,
      padding: 12,
      boxPadding: 6,
      usePointStyle: true,
      callbacks: {
        label: function(context: any) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return label;
        },
        title: function(tooltipItems: any) {
          return `Month: ${tooltipItems[0].label}`;
        },
      },
    },
  },
  interaction: {
    mode: "nearest" as const,
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "#718096",
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
      },
    },
    y: {
      grid: {
        color: "#F7FAFC",
        drawBorder: false,
      },
      ticks: {
        color: "#718096",
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
        callback: function(value: any) {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(value);
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
    },
    point: {
      hoverBackgroundColor: "#4F46E5",
      hoverBorderColor: "#FFFFFF",
      hoverBorderWidth: 3,
    },
  },
};

export default function LineChart({ data = defaultData, options = defaultOptions, height = 400, className = "" }: LineChartProps) {
  const chartOptions = {
    ...defaultOptions,
    ...options,
  };

  const chartData = {
    ...defaultData,
    ...data,
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
          <p className="text-sm text-gray-500">Monthly revenue comparison</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></div>
            <span className="text-gray-600">This Year</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-gray-600">Last Year</span>
          </div>
        </div>
      </div>
      
      <div style={{ height: `${height}px` }}>
        <Line data={chartData} options={chartOptions} />
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
        <div className="flex space-x-2">
          <button className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            View Report
          </button>
          <button className="text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1 rounded-lg transition-colors">
            Export
          </button>
        </div>
      </div>
    </div>
  );
}