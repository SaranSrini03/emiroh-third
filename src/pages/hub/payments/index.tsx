"use client";
import { AnimatedTable, data as initialData, GradientButton, StatsCards, SimpleLineChartPayments, HubSidebar, SearchInput, useState } from "@/lib/imports";



const chartData = [
  { date: "Jan", users: 210 },
  { date: "Feb", users: 80 },
  { date: "Mar", users: 220 },
  { date: "Apr", users: 160 },
  { date: "May", users: 670 },
  { date: "Jun", users: 220 },
  { date: "Jul", users: 210 },
];

const campaigns = [
  {
    name: "Summer Vibes 2024",
    influencers: 8,
    links: 12,
    budget: "$2,000",
    clicks: 1450,
    conversions: 32,
    status: "Active",
  },
  {
    name: "Winter Warmers",
    influencers: 5,
    links: 8,
    budget: "$1,500",
    clicks: 860,
    conversions: 19,
    status: "Active",
  },
  {
    name: "Festive Lights",
    influencers: 12,
    links: 18,
    budget: "$3,200",
    clicks: 2030,
    conversions: 47,
    status: "Inactive",
  },
];

const allStatsSets = [
  [
    { value: "$5,000", change: "+6.08%", label: "Revenue", bgColor: "bg-purple-100", textColor: "text-gray-900", changeColor: "text-green-600" },
    { value: "2,302", change: "+6.08%", label: "Clicks", bgColor: "bg-blue-100", textColor: "text-gray-900", changeColor: "text-green-600" },
    { value: "2000", change: "+6.08%", label: "Payout", bgColor: "bg-purple-100", textColor: "text-gray-900", changeColor: "text-green-600" },
    { value: "3000", change: "-3.25%", label: "Profit", bgColor: "bg-purple-100", textColor: "text-gray-900", changeColor: "text-red-500" },
    { value: "8.34%", change: "+6.08%", label: "Conversion", bgColor: "bg-purple-100", textColor: "text-gray-900", changeColor: "text-green-600" },
  ],
];

export default function PaymentsPage() {
  const [period, setPeriod] = useState("Week");
  const [search, setSearch] = useState("");
  const [campaign, setCampaign] = useState("All");

  // 🔹 Table pagination & data handling
  const [tableData, setTableData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  // Filter data by search
  const filteredData = tableData.filter((row) =>
    row.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <HubSidebar activeItem="Payments" />

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-600 text-[15px]">
            You're doing great. You've earned{" "}
            <span className="font-semibold text-blue-700">$1,230</span> this week.
          </div>

          <div className="flex gap-2 items-center mb-5">

            <GradientButton label={"Pending Payments"} href="/hub/payments/pending" />

            <div className="relative mr-2 min-w-[160px]">
              <select
                className="text-gray-700 border border-gray-200 rounded-lg px-3 py-2 text-xs bg-white appearance-none cursor-pointer"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
              >
                <option value="All">Select Campaign</option>
                {campaigns.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap gap-6 mb-10">
          {allStatsSets.map((statsSet, index) => (
            <div key={index} className="flex-1 min-w-[300px]">
              <StatsCards stats={statsSet} />
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-semibold text-gray-700">Payments Overview</div>
            <select
              className="border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white text-gray-700"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="Week">This Week</option>
              <option value="Month">This Month</option>
              <option value="Year">This Year</option>
            </select>
          </div>

          <div className="w-full mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Reports</h2>
            <div className="bg-white shadow rounded-2xl p-6">
              <SimpleLineChartPayments
                data={chartData.map((d) => ({ month: d.date, value: d.users }))}
                width={1200}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-8">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search campaign..."
            />
          </div>
        </div>

        {/* ✅ Animated Table Section */}
        <div className="mt-8">
          <AnimatedTable
            currentData={currentData as any}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type="dashboard"
            showActiveButton={false}
          />
        </div>
      </div>
    </div>
  );
}
