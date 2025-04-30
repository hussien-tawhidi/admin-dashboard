"use client";

import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import ProductTable from "./ProductTable";
import { orders } from "./faceProucts";

export default function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<StatusFilter>("all");

  type StatusFilter = "all" | "Completed" | "Processing";

  const filteredOrders = orders?.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className='bg-white/70 dark:bg-dark/80 backdrop-blur-md border border-light/20 dark:border-dark rounded-2xl shadow-lg p-4 md:w-[96%] mx-auto transition-all duration-300'>
      {/* Header */}
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6'>
        <h2 className='text-2xl font-bold text-dark dark:text-light'>
          🛒 سفارشات اخیر
        </h2>

        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
          {/* Search Input */}
          <div className='relative w-full sm:w-64'>
            <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              className='w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-dark text-dark dark:text-light border border-light/40 dark:border-light/30 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 outline-none transition'
              placeholder='جستجو کنید ...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as StatusFilter)}
            className='w-full sm:w-auto px-4 py-2 rounded-xl bg-white dark:bg-dark text-dark dark:text-light border border-light/40 dark:border-light/30 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 outline-none transition'>
            <option value='all'>همه</option>
            <option value='Completed'>تکمیل شده</option>
            <option value='Processing'>در حال پردازش</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto rounded-xl border border-light/10 dark:border-light/20'>
        <ProductTable filteredOrders={filteredOrders} />
      </div>

      {/* Footer */}
      <div className='flex justify-between items-center mt-4 border-t pt-4 border-light/30 dark:border-light/20'>
        <p className='text-sm text-dark dark:text-light'>
          نمایش <span className='font-semibold'>{filteredOrders.length}</span>{" "}
          از <span className='font-semibold'>90,521</span> سفارشات
        </p>

        <div className='flex gap-2'>
          <button className='flex items-center justify-center w-8 h-8 rounded-lg text-dark dark:text-light bg-light/20 hover:bg-light/40 dark:hover:bg-light/30 transition'>
            <MdKeyboardArrowRight />
          </button>
          <button className='flex items-center justify-center w-8 h-8 rounded-lg text-dark dark:text-light bg-light/20 hover:bg-light/40 dark:hover:bg-light/30 transition'>
            <MdKeyboardArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
