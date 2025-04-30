"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
import { purchaseData } from "./data";

const statusColor: { [key: string]: string } = {
  موفق: "text-green-700",
  معلق: "text-yellow-700",
  لغو: "text-pink",
};

export default function PurchaseTable() {
  const router = useRouter();

  return (
    <div className='w-full'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=''>
        <div className='rounded-xl overflow-x-auto scrollbar-hide'>
          <table className='text-sm text-right w-full'>
            <thead className='font-bold'>
              <tr>
                {[
                  "شناسه",
                  "سفارش‌دهنده",
                  "اقلام",
                  "وضعیت دریافت",
                  "تاریخ",
                  "مبلغ",
                  "روش پرداخت",
                  "وضعیت پرداخت",
                  "عملیات",
                ].map((item, index) => (
                  <th className='p-3' key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='bg-lighter dark:bg-dark'>
              {purchaseData.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className='border-b border-light/50'>
                  <td className='p-3 font-medium'>{order.id}</td>
                  <td className='p-3 flex md:flex-row flex-col items-center gap-1'>
                    <Image
                      width={100}
                      height={100}
                      alt='user'
                      className='object-cover rounded-full w-9 h-9'
                      src={"/user.jpg"}
                    />
                    {order.name}
                  </td>
                  <td className='p-3'>{order.items}</td>
                  <td className='p-3'>
                    <span className='inline-block px-3 py-1 text-green-700 rounded-full text-xs'>
                      {order.status}
                    </span>
                  </td>
                  <td className='p-3'>{order.date}</td>
                  <td className='p-3'>{order.total}</td>
                  <td className='p-3'>{order.method}</td>
                  <td className='p-3'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        statusColor[order.paymentStatus]
                      }`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className='p-3 flex gap-2'>
                    <button
                      className='w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-dark/50 transition'
                      onClick={() => router.push(`/orders/${order.id}`)}>
                      <FiEye />
                    </button>
                    <button className='w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-dark/50 transition'>
                      <FiEdit2 />
                    </button>
                    <button className='w-full px-4 py-2 flex items-center gap-2 text-pink hover:bg-gray-100 dark:hover:bg-dark/50 transition'>
                      <FiTrash2 />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
