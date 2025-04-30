"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";
import { customers } from "./data";
import CheckBox from "../permissions/CheckBox";
import { motion } from "framer-motion"; // Import motion

function getStatusStyle(status: string) {
  switch (status) {
    case "تکمیل‌شده":
      return "text-green-700";
    case "لغو شده":
      return "text-pink";
    case "در انتظار":
      return "text-blue-500";
    default:
      return "";
  }
}

export default function CustomersTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const pageSize = 5;

  const filtered = useMemo(() => {
    return customers.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className='dark:bg-dark rounded-xl shadow overflow-hidden'>
      {/* Header */}
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 p-4'>
        <h2 className='text-lg font-bold'>لیست مشتریان</h2>
        <div className='flex items-center border border-light/30 py-1.5 px-2 rounded-md w-full md:w-auto'>
          <BiSearch size={18} className='ml-1' />
          <input
            type='text'
            placeholder='جستجو بر اساس نام...'
            className='bg-transparent outline-none w-full text-sm py-1'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full text-right'>
          <thead>
            <tr className='bg-gray-100 dark:bg-dark text-sm'>
              <th className='p-4'>نام مشتری</th>
              <th className='p-4'>شناسه فاکتور</th>
              <th className='p-4'>وضعیت</th>
              <th className='p-4'>مبلغ کل</th>
              <th className='p-4'>مبلغ باقی‌مانده</th>
              <th className='p-4'>تاریخ سررسید</th>
              <th className='p-4'>روش پرداخت</th>
              <th className='p-4'>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((customer) => (
              <motion.tr
                key={customer.id}
                className='border-b border-light/30 hover:bg-gray-50 dark:hover:bg-darker/50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <td className='p-4 flex items-center gap-2'>
                  <CheckBox
                    selectedIds={selectedIds}
                    filteredPermissions={[{ id: customer.id }]}
                    setSelectedIds={setSelectedIds}
                    isChecked={selectedIds.includes(customer.id)}
                  />
                  <Image
                    src={customer.avatar}
                    alt={customer.name}
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                  <span>{customer.name}</span>
                </td>
                <td className='p-4'>{customer.invoiceId}</td>
                <td className='p-4'>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      customer.status
                    )}`}>
                    {customer.status}
                  </span>
                </td>
                <td className='p-4'>{customer.total}</td>
                <td className='p-4'>{customer.due}</td>
                <td className='p-4'>{customer.date}</td>
                <td className='p-4'>{customer.method}</td>
                <td className='p-4 space-x-2 space-x-reverse'>
                  <button>
                    <IoEyeOutline />
                  </button>
                  <button>
                    <GoPencil />
                  </button>
                  <button className='text-pink/80 hover:text-pink'>
                    <LuTrash2 />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex justify-between items-center p-4 text-sm'>
        <span>
          صفحه {page} از {totalPages}
        </span>
        <div className='space-x-2 space-x-reverse'>
          <button
            className='px-3 py-1 border rounded disabled:opacity-40'
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}>
            قبلی
          </button>
          <button
            className='px-3 py-1 border rounded disabled:opacity-40'
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}>
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
}
