"use client";


import { HubSidebar, Badge, ChevronRight } from "@/lib/imports";



interface ApprovalItem {
  name: string;
  campaign: string;
  status: string;
  avatar: string;
}

const defaultPendingApprovals: ApprovalItem[] = [
  { name: "ByeWind", campaign: "Mens wear", status: "Approve", avatar: "BW" },
  { name: "Natali Craig", campaign: "Mens wear", status: "Complete", avatar: "NC" },
  { name: "Drew Cano", campaign: "Mens wear", status: "Complete", avatar: "DC" },
  { name: "Orlando Diggs", campaign: "Mens wear", status: "Complete", avatar: "OD" },
  { name: "Andi Lane", campaign: "Mens wear", status: "Complete", avatar: "AL" },
];

function ApprovalItemComponent({ item, index }: { item: ApprovalItem; index: number }) {
  const getBadgeColors = (status: string) => {
    switch (status) {
      case "Complete":
        return { color: "text-green-800", bgColor: "bg-green-100" };
      case "In Progress":
        return { color: "text-purple-800", bgColor: "bg-purple-100" };
      case "Approve":
        return { color: "text-white", bgColor: "bg-purple-600" };
      case "Pending":
        return { color: "text-blue-800", bgColor: "bg-blue-100" };
      default:
        return { color: "text-gray-800", bgColor: "bg-gray-100" };
    }
  };

  const { color, bgColor } = getBadgeColors(item.status);
  const rowBg = index % 2 === 0 ? "bg-purple-50" : "bg-blue-50";

  return (
    <div
      className={`flex items-center justify-between gap-2 hover:scale-[1.01] transition-transform cursor-pointer p-3 rounded-full ${rowBg}`}
    >
      {/* Avatar */}
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
        {item.avatar}
      </div>

      {/* Name */}
      <div className="flex-1 font-medium text-gray-900">{item.name}</div>

      {/* Campaign */}
      <div className="flex-1 text-sm text-gray-600">{item.campaign}</div>

      {/* Status Badges */}
      <div className="flex-1 flex justify-end gap-2">
        <Badge label={item.status} color={color} bgColor={bgColor} />
        <Badge label="Pay Now" color="text-white" bgColor="bg-red-600" />
      </div>
    </div>
  );
}

export default function ApprovalListsPage() {
  const pendingApprovals = defaultPendingApprovals;

  const renderHeaders = () => (
    <div className="flex items-center justify-between gap-4 text-sm text-gray-700 mb-2 font-medium">
      <div className="w-8"></div> {/* empty for avatar */}
      <div className="flex-1">Influencer Name</div>
      <div className="flex-1">Campaign Name</div>
      <div className="flex-1 text-right">Status / Pay</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <HubSidebar activeItem="Approvals" />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Pending Approvals</h1>
        </div>

        {/* Approvals Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Influencer Approvals</h3>
            <ChevronRight size={16} className="text-gray-400" />
          </div>

          {/* Column Headers */}
          {renderHeaders()}

          {/* Rows */}
          <div className="space-y-3">
            {pendingApprovals.map((item, index) => (
              <ApprovalItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
