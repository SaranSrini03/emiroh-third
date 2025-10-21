import {
  motion,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableHeader,
  TableRowContent,
  Variants,
} from "@/lib/imports";

import { TableRowItem, TableType } from "@/data/types";
import { Filter } from "lucide-react";
import FilterButton from "@/components/buttons/FilterButton";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

interface AnimatedTableProps<T extends TableRowItem> {
  currentData: T[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  type: TableType;
  showActiveButton?: boolean; // NEW: controls visibility of Active button
}

export default function AnimatedTable<T extends TableRowItem>({
  currentData,
  currentPage,
  setCurrentPage,
  totalPages,
  type,
  showActiveButton = false, // default to hidden
}: AnimatedTableProps<T>) {
  return (
    <main className="flex-1 p-6">
      {/* Table Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Performance Summary Table
      </h2>

      {/* Buttons + Search + Filter + Optional Active */}
      <div className="flex items-center justify-between mb-4">
        {/* Button Group */}
        <div className="inline-flex rounded-full overflow-hidden border border-gray-300">
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors">
            View All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors">
            Latest
          </button>
        </div>

        {/* Search + Filter + Active */}
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />

          {/* Optional Active Button */}
          {showActiveButton && (
            <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              Active
            </button>
          )}

          {/* Filter Button */}
          <FilterButton onClick={() => console.log("Filter clicked!")} />
        </div>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-x-auto border rounded-xl shadow-md bg-white"
      >
        <TableContainer component={Paper} className="shadow-none text-black">
          <Table className="w-full border-collapse">
            <TableHead className="bg-gray-100 text-gray-600 text-xs uppercase">
              <TableHeader type={type as any} />
            </TableHead>

            <motion.tbody
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {currentData.map((item, idx) => (
                <motion.tr
                  key={idx}
                  variants={rowVariants}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <TableRowContent {...({ type, item } as any)} />
                </motion.tr>
              ))}
            </motion.tbody>
          </Table>
        </TableContainer>
      </motion.div>
    </main>
  );
}


