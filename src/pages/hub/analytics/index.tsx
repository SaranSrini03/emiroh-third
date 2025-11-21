"use client";

import { tableData as initialData, allStatsSets, trafficData } from "@/data";
import { useState, HubSidebar, StatsCards, SearchInput,  AnimatedTable, DonutPie,MultiLineChart,BarChart3, Filter, ChevronDown } from "@/lib/imports";

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("Last 7 Days");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;
  const totalPages = Math.ceil(initialData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = initialData.slice(startIndex, startIndex + rowsPerPage);
  const chartData = [
    { x: "Jan", users: 210, revenue: 8000 },
    { x: "Feb", users: 180, revenue: 7500 },
    { x: "Mar", users: 250, revenue: 9000 },
    { x: "Apr", users: 200, revenue: 8500 },
  ];
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <HubSidebar activeItem="Analytics" />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={28} />
            <h1 className="text-xl font-bold text-gray-800">Analytics</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 shadow-sm">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700"
              onClick={() =>
                setPeriod(period === "Last 7 Days" ? "Last 30 Days" : "Last 7 Days")
              }
            >
              <span>{period}</span>
              <ChevronDown size={18} />
            </button>
          </div>
          <div className="w-56">
            <SearchInput value={""} onChange={() => { }} placeholder="Search" />
          </div>
        </div>

        {/* Analytics Stats */}
        <div className="flex flex-wrap gap-6">
          {allStatsSets.map((statsSet, index) => (
            <div key={index} className="flex-1 min-w-[300px]">
              <StatsCards stats={statsSet} />
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Chart */}
          <div className="col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-gray-700">Website Traffic</div>
              <span className="text-xs text-gray-500">{period}</span>
            </div>
            <MultiLineChart
          
              height={250}
            />
          </div>

          {/* Right Chart (Optional Pie/Traffic) */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
            <div className="font-medium text-gray-700 mb-4">Top Traffic Sources</div>

            {/* Flex container to align donut and legend */}
            <div className="flex items-center justify-start gap-6">
              <DonutPie data={trafficData} size={100} strokeWidth={2} />
            </div>
          </div>

        </div>

        {/* Animated Table Section */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Detailed Analytics</h2>
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <AnimatedTable
              currentData={currentData as any}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              type={"dashboard"}
              showActiveButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
