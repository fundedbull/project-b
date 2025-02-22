"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5; // Number of visible pages before showing "..."

    if (totalPages <= maxVisiblePages + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-2 rounded border border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
      >
        <ArrowLeftIcon className="size-6" />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => changePage(page)}
            className={`px-3 py-2 rounded border ${
              page === currentPage
                ? "border-white text-white bg-gray-800"
                : "border-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-2 text-gray-400">
            {page}
          </span>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-2 rounded border border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
      >
        <ArrowRightIcon className="size-6" />
      </button>
    </div>
  );
};

export default Pagination;
