"use client";
import { Search, Filter, Info } from "lucide-react";

interface PerformanceTableRow {
  influencerName: string;
  avatar?: string;
  productLink: string;
  productId: string;
  totalConvertio: string;
  totalClicks: string;
  avgConversion: string;
  revenueGenerated: string;
  totalCommission: string;
}

interface PerformanceTableProps {
  data?: PerformanceTableRow[];
  activeTab?: "viewAll" | "latest";
  onTabChange?: (tab: "viewAll" | "latest") => void;
}

const defaultData: PerformanceTableRow[] = [
  {
    influencerName: "@olivia",
    avatar: "/assets/avatars/olivia.jpg",
    productLink: "Product Promotion",
    productId: "P1023",
    totalConvertio: "1,200",
    totalClicks: "1,200",
    avgConversion: "14.1%",
    revenueGenerated: "₹2,55,000",
    totalCommission: "₹25,500",
  },
];

export default function PerformanceTable({ 
  data = defaultData,
  activeTab = "viewAll",
  onTabChange 
}: PerformanceTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Performance Summary Table</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "viewAll" 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600"
              }`}
              onClick={() => onTabChange?.("viewAll")}
            >
              View all
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "latest" 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600"
              }`}
              onClick={() => onTabChange?.("latest")}
            >
              Latest
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
              <Filter size={14} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Influencer name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Product Link</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Product ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Total convertio
                <Info size={14} className="inline ml-1 text-gray-400" />
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Total Clicks
                <Info size={14} className="inline ml-1 text-gray-400" />
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Avg Conversion</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Revenue Generated
                <Info size={14} className="inline ml-1 text-gray-400" />
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">
                Total Commission
                <Info size={14} className="inline ml-1 text-gray-400" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      {row.avatar ? (
                        <img 
                          src={row.avatar} 
                          alt={row.influencerName} 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                      ) : (
                        <span className="text-xs font-medium text-gray-700">
                          {row.influencerName.charAt(1).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{row.influencerName}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">{row.productLink}</td>
                <td className="py-4 px-4 text-gray-900">{row.productId}</td>
                <td className="py-4 px-4 text-gray-900">{row.totalConvertio}</td>
                <td className="py-4 px-4 text-gray-900">{row.totalClicks}</td>
                <td className="py-4 px-4 text-gray-900">{row.avgConversion}</td>
                <td className="py-4 px-4 text-gray-900">{row.revenueGenerated}</td>
                <td className="py-4 px-4 text-gray-900">{row.totalCommission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


