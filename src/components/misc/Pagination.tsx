import { Button } from "@/lib/imports";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  const pages: (number | string)[] = [];
  const maxVisible = 4;

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) pages.push(1, 2, 3, "...", totalPages);
    else if (currentPage >= totalPages - 2)
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    else
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-6 text-sm ">
      {/* Previous Button */}
      <Button
        label="< Previous"
        radius={0}
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-none border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      />

      {/* Page Numbers */}
      {pages.map((page, idx) => (
        <Button
        radius={0}
          label={String(page)}
          key={idx}
          onClick={() => typeof page === "number" && setCurrentPage(page)}
          disabled={page === "..."}
          className={`
            px-4 py-2 rounded-none border transition-colors
            ${
              currentPage === page
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            }
            ${
              page === "..." 
                ? "cursor-default bg-transparent border-transparent text-gray-400 hover:bg-transparent hover:text-gray-400 hover:border-transparent" 
                : ""
            }
          `}
        />
      ))}

      {/* Next Button */}
      <Button
        label="Next >"
        radius={0}
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-none border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      />
    </div>
  );
}