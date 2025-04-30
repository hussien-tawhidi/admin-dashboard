"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { refundProcessing } from "../data";


const statusStyles: Record<string, string> = {
  "در حال بررسی": "text-yellow-600",
  "تایید شده": "text-green-600",
  "رد شده": "text-pink",
};

export default function RefundProcessing() {
  const [selectedTab, setSelectedTab] = useState("همه");

  const filteredData =
    selectedTab === "همه"
      ? refundProcessing
      : refundProcessing.filter((r) => r.status === selectedTab);

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6'>
      <h1 className='text-2xl font-bold'>در حال پردازش بازگشت وجه</h1>

      <div className='flex flex-wrap scrollbar-hide w-full gap-3 text-sm'>
        {["همه", "در حال بررسی", "تایید شده", "رد شده"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`sm:px-4 px-2 py-1.5 rounded-full border ${
              selectedTab === tab
                ? "bg-light text-lighter dark:bg-dark"
                : "text-muted-foreground border-light/30 dark:border-zinc-700"
            } transition`}>
            {tab}
          </button>
        ))}
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {filteredData.map((request, index) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className='rounded-xl p-5 flex items-center justify-between gap-4 bg-lighter dark:bg-dark shadow-sm hover:shadow-md transition'>
            <div className='flex items-center gap-4'>
              <Image
                src={request.avatar}
                alt='user'
                width={48}
                height={48}
                className='w-12 h-12 rounded-full object-cover ring-2 ring-muted'
              />
              <div>
                <p className='font-semibold'>{request.name}</p>
                <p className='text-sm font-thin text-muted-foreground'>
                  {request.product}
                </p>
              </div>
            </div>

            <div className='text-sm sm:block hidden'>
              <p className='text-muted-foreground'>تاریخ:</p>
              <p className='font-thin'>{request.date}</p>
            </div>

            <span
              className={`text-xs px-3 py-1 font-thin rounded-full ${
                statusStyles[request.status]
              }`}>
              {request.status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
