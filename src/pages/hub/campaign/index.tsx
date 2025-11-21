"use client";
import { TableType, TableRowItem } from "@/data/types";
import { GradientButton, HubSidebar, AnimatedTable, Filter, useState } from "@/lib/imports";

// 🧩 Example campaign data
const initialData = [
  {
    name: "Product Promotion",
    influencers: 7,
    links: 5,
    budget: "$5,000",
    clicks: 1500,
    conversions: 120,
    status: "Active",
  },
  {
    name: "Holiday Sale",
    influencers: 10,
    links: 12,
    budget: "$8,000",
    clicks: 2200,
    conversions: 180,
    status: "Active",
  },
  {
    name: "Brand Awareness",
    influencers: 6,
    links: 4,
    budget: "$3,500",
    clicks: 900,
    conversions: 75,
    status: "Paused",
  },
];

// 🧠 AnimatedTable props type
interface AnimatedTableProps<T extends TableRowItem> {
  currentData: T[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  type: TableType;
  showActiveButton?: boolean;
}

export default function CampaignPage() {
  // Table state
  const [tableData, setTableData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = tableData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Sidebar */}
      <HubSidebar activeItem="Campaign" />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-end gap-2 mb-10">
          <GradientButton
            label={"Campaign Request"}
            variant="vertical"
            href="campaign/pendingRequest"
          />
          <GradientButton
            label={"Create Campaign"}
            width="px-4 py-2"
            variant="vertical"
          />
        </div>

        {/* Header & Filter */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-4">
              Choose your campaign to analyze
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Animated Table Section */}
        <div className="mt-10">
          <AnimatedTable
            currentData={currentData as any}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type={"dashboard"}
            showActiveButton={false} // hides the extra button
          />
        </div>
      </div>
    </div>
  );
}
