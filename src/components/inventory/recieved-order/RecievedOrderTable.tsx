"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiMoreVertical,
  FiXCircle,
  FiEdit2,
  FiTrash2,
  FiEye,
} from "react-icons/fi";

interface Props {
  id: string;
  name: string;
  items: number;
  amount: number;
  payMentStatus: string;
  recievedStatus: string;
}

interface TableProps {
  data: Props[];
}

export default function RecievedOrderTable({ data }: TableProps) {
  const [openRow, setOpenRow] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className='overflow-x-auto p-4'>
      <table className='min-w-full bg-lighter dark:bg-dark shadow rounded-xl text-sm text-right'>
        <thead>
          <tr className='bg-lighter dark:bg-darker border-b'>
            {[
              "نام",
              "کد",
              "تعداد محصول",
              "مقدار",
              "وضعیت پرداخت",
              "وضعیت دریافتی",
              "کنش",
            ].map((title, index) => (
              <th className='p-3 whitespace-nowrap' key={index}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <motion.tr
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className='border-b border-light/30 hover:bg-light/10 transition-all duration-300'>
              <td className='p-3 font-medium'>{order.name}</td>
              <td className='p-3'>ORD{String(order.id).padStart(3, "0")}</td>
              <td className='p-3'>{order.items}</td>
              <td className='p-3'>
                {order.amount.toLocaleString("fa-IR")} تومان
              </td>
              <td className='p-3'>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    order.payMentStatus === "پرداخت شده"
                      ? " dark:text-green-700 text-green-500"
                      : "dark:text-yellow-700 text-yellow-500"
                  }`}>
                  {order.payMentStatus}
                </span>
              </td>
              <td className='p-3'>
                <span
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    order.recievedStatus === "تحویل داده شده"
                      ? "dark:text-green-700 text-green-500"
                      : order.recievedStatus === "در حال پردازش"
                      ? "dark:text-yellow-700 text-yellow-500"
                      : "text-pink"
                  }`}>
                  {order.recievedStatus === "تحویل داده شده" && (
                    <FiCheckCircle className='text-base' />
                  )}
                  {order.recievedStatus === "در حال پردازش" && (
                    <FiClock className='text-base' />
                  )}
                  {order.recievedStatus === "لغو شده" && (
                    <FiXCircle className='text-base' />
                  )}
                  {order.recievedStatus}
                </span>
              </td>
              <td className='p-3 text-center relative'>
                <button
                  className='p-2 hover:text-darker dark:hover:text-light dark:hover:bg-dark rounded-full transition'
                  onClick={() =>
                    setOpenRow((prev) => (prev === order.id ? null : order.id))
                  }>
                  <FiMoreVertical className='text-lg' />
                </button>

                {openRow === order.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className='absolute left-0 top-full mt-2 w-32 bg-white dark:bg-dark shadow-lg rounded-lg overflow-hidden z-10 text-sm'>
                    <button
                      className='w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-dark/50 transition'
                      onClick={() => router.push(`/orders/${order.id}`)}>
                      <FiEye /> مشاهده
                    </button>
                    <button className='w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-dark/50 transition'>
                      <FiEdit2 /> ویرایش
                    </button>
                    <button className='w-full px-4 py-2 flex items-center gap-2 text-pink hover:bg-gray-100 dark:hover:bg-dark/50 transition'>
                      <FiTrash2 /> حذف
                    </button>
                  </motion.div>
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
