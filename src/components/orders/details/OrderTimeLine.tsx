"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaRegClock, FaTruck, FaBoxOpen } from "react-icons/fa";

const orderSteps = [
  {
    id: 1,
    title: "سفارش ثبت شد",
    icon: <FaRegClock />,
    time: "۱۴۰۳/۰۱/۱۵ - ۱۰:۳۲",
    status: "done",
  },
  {
    id: 2,
    title: "در حال پردازش",
    icon: <FaBoxOpen />,
    time: "۱۴۰۳/۰۱/۱۵ - ۱۱:۲۰",
    status: "done",
  },
  {
    id: 3,
    title: "ارسال شده",
    icon: <FaTruck />,
    time: "۱۴۰۳/۰۱/۱۵ - ۱۴:۰۰",
    status: "current",
  },
  {
    id: 4,
    title: "تحویل داده شده",
    icon: <FaCheckCircle />,
    time: "",
    status: "pending",
  },
];

export default function OrderTimeline() {
  return (
    <div className='p-6 bg-lighter dark:bg-dark rounded-xl shadow'>
      <h3 className='text-lg font-semibold mb-6'>تاریخچه سفارش</h3>
      <div className='space-y-6 border-r-2 border-dashed border-primary pr-6 relative'>
        {orderSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className='flex items-start gap-3 relative'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                step.status === "done"
                  ? "bg-green-500"
                  : step.status === "current"
                  ? "bg-yellow-500"
                  : "bg-gray-400"
              }`}>
              {step.icon}
            </div>
            <div className='flex-1'>
              <p className='text-sm font-medium'>{step.title}</p>
              <p className='text-xs text-muted mt-1'>{step.time}</p>
            </div>
          </motion.div>
        ))}
        {/* Vertical line tail */}
        <div className='absolute top-0 right-[14px] h-full border-r-2 border-dashed border-primary z-0' />
      </div>
    </div>
  );
}
