  "use client";
  import { useState, FilterButton, HubSidebar, StatsCards, SimpleLineChartPayments, ApprovalLists, AnimatedTable } from "@/lib/imports";
  import { chartData, tableData as initialData, allStatsSets } from "@/data";

  export default function Dashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState("Week");
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonState, setButtonState] = useState<"send" | "start" | "hidden">("send");
    const [tableMode, setTableMode] = useState<"normal" | "start">("normal");
    const [tableData, setTableData] = useState(initialData);

    const rowsPerPage = 10;
    const totalPages = Math.ceil(tableData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;

    const currentData =
      tableMode === "start"
        ? tableData
          .flatMap((inf) =>
            (inf as any).start?.map((s: any) => ({ ...inf, ...s })) || []
          )
          .slice(startIndex, startIndex + rowsPerPage)
        : tableData.slice(startIndex, startIndex + rowsPerPage);

    const handleButtonClick = () => {
      if (buttonState === "send") {
        const updatedData = tableData.map((item) => ({
          ...item,
          invitation: "Invited",
        }));
        setTableData(updatedData);
        setButtonState("start");
      } else if (buttonState === "start") {
        setTableMode("start");
        setCurrentPage(1);
        setButtonState("hidden");
      }
    };

    return (
      <div className="min-h-screen bg-white flex">
        <HubSidebar activeItem="Dashboard" />

        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">You're doing great. You've earned $1,230 this week.</p>
            <FilterButton onClick={() => console.log("Filters clicked!")} />
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-6">
            {allStatsSets.map((statsSet, index) => (
              <div key={index} className="flex-1 min-w-[300px]">
                <StatsCards stats={statsSet} />
              </div>
            ))}
          </div>

          {/* Reports Section */}
          <div className="w-full mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Reports</h2>
            <div className="bg-white shadow rounded-2xl p-6 m-10">
              <SimpleLineChartPayments
                data={chartData.map((d) => ({ month: d.date, value: d.users }))}
                width={1200}
                height={200}
              />
            </div>
          </div>

          {/* Approval Lists */}
          <ApprovalLists />

          <div className="mt-10">
            <AnimatedTable
              currentData={currentData as any}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              type={"dashboard"}
              showActiveButton={false}
            />
          </div>
        </div>
      </div>
    );
  }
