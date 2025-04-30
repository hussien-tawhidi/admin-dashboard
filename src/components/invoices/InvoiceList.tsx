"use client";

import { motion } from "framer-motion";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { useEffect } from "react";
import { invoices, stats } from "./data";

const statusColor: { [key: string]: string } = {
  موفق: "text-green-700 ",
  معلق: "text-yellow-700 ",
  لغو: "text-pink ",
};

export default function InvoiceList() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <motion.div
      className='p-6 space-y-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      {/* Stats cards */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className='p-4 bg-lighter dark:bg-dark rounded-xl shadow flex items-center justify-between'>
            <div>
              <p className='text-sm'>{stat.title}</p>
              <p className='text-xl font-bold'>{stat.value}</p>
            </div>
            <div className='text-3xl'>{stat.icon && <stat.icon />}</div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className='overflow-x-auto bg-light dark:bg-dark rounded-xl shadow'>
        <table className='min-w-full text-sm text-right'>
          <thead className='bg-transparent font-bold'>
            <tr>
              {[
                "شناسه",
                "مشتری",
                "تاریخ",
                "مبلغ",
                "روش پرداخت",
                "وضعیت",
                "عملیات",
              ].map((head, index) => (
                <th key={index} className='p-3 whitespace-nowrap'>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <motion.tr
                key={inv.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className='border-b border-light/30 transition'>
                <td className='p-3 font-medium'>{inv.id}</td>
                <td className='p-3 flex items-center gap-2 whitespace-nowrap'>
                  <Image
                    src={inv.avatar}
                    alt='avatar'
                    width={32}
                    height={32}
                    className='rounded-full w-8 h-8 object-cover'
                  />
                  {inv.name}
                </td>
                <td className='p-3'>{inv.date}</td>
                <td className='p-3'>{inv.total}</td>
                <td className='p-3'>{inv.method}</td>
                <td className='p-3'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusColor[inv.status]
                    }`}>
                    {inv.status}
                  </span>
                </td>
                <td className='p-3 flex gap-2 justify-around'>
                  <button>
                    <FiEye />
                  </button>
                  <button>
                    <FiEdit2 />
                  </button>
                  <button className='text-pink'>
                    <FiTrash2 />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
