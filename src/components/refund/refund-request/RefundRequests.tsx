"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { refundRequests } from "../data";

const statusColors: { [key: string]: string } = {
  "در انتظار": "text-yellow-700",
  "تایید شد": "text-green-700",
  "رد شد": "text-pink",
};

export default function RefundRequests() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='p-4 sm:p-6 max-w-7xl mx-auto space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>درخواست‌های بازگشت وجه</h1>
      </div>

      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
        {refundRequests.map((request, index) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className='bg-white dark:bg-dark rounded-2xl p-5 shadow-sm hover:shadow-md transition'>
            <div className='flex items-center gap-4 mb-4'>
              <Image
                src={request.avatar}
                alt='avatar'
                width={50}
                height={50}
                className='w-12 h-12 rounded-full object-cover ring-2 ring-muted'
              />
              <div className='text-right'>
                <p className='font-semibold text-base'>{request.customer}</p>
                <p className='text-sm text-muted-foreground'>
                  {request.product}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 text-sm text-right'>
              <div>
                <p className='text-muted-foreground'>علت:</p>
                <p>{request.reason}</p>
              </div>
              <div>
                <p className='text-muted-foreground'>تاریخ:</p>
                <p>{request.date}</p>
              </div>
            </div>

            <div className='flex items-center justify-between mt-5'>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  statusColors[request.status]
                }`}>
                {request.status}
              </span>
              <div className='flex gap-2'>
                <button className='flex items-center gap-1 px-3 py-1 text-green-700 border border-green-700 rounded-md text-sm transition'>
                  <FiCheckCircle className='text-base' />
                  تایید
                </button>
                <button className='flex items-center gap-1 px-3 py-1 text-pink border border-pink rounded-md text-sm transition'>
                  <FiXCircle className='text-base' />
                  رد
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
