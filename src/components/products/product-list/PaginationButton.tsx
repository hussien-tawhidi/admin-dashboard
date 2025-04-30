import { getPaginationRangeResponsive } from "@/helper/productList";
import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  itemsPerPage: number;
  handlePageChange: (page: number) => void;
}

export default function PaginationButton({
  currentPage,
  totalProducts,
  itemsPerPage,
  handlePageChange,
}: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div className='flex items-center justify-center mt-8 gap-4 flex-wrap'>
      {/* Prev Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='صفحه قبلی'
        className={`group flex items-center justify-center gap-2 sm:px-4 px-2 sm:py-2 py-1 rounded-xl border border-light text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}>
        <MdOutlineKeyboardArrowRight className='text-xl group-hover:translate-x-[-2px] transition-transform duration-200' />
        <span className='sm:flex hidden'> قبلی</span>
      </button>

      {/* Page Numbers */}
      <div className='flex flex-wrap justify-center gap-2 sm:justify-end'>
        {getPaginationRangeResponsive(currentPage, totalPages, isMobile).map(
          (page, index) =>
            page === "..." ? (
              <span
                key={`dots-${index}`}
                className='text-sm px-2 py-1 opacity-50 select-none'>
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => handlePageChange(Number(page))}
                aria-label={`صفحه ${page}`}
                className={`sm:text-sm text-[10px] font-medium px-1.5 py-1 sm:px-4 sm:py-2 rounded-xl transition-all duration-300 ${
                  currentPage === page
                    ? "dark:text-lighter text-darker border border-light shadow-lg"
                    : ""
                } hover:scale-105`}>
                {page}
              </button>
            )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='صفحه بعدی'
        className={`group flex items-center justify-center gap-2 sm:px-4 px-2 sm:py-2 py-1 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}>
        <span className='sm:flex hidden'>بعدی</span>
        <MdOutlineKeyboardArrowLeft className='text-xl group-hover:translate-x-[2px] transition-transform duration-200' />
      </button>
    </div>
  );
}
