"use client";
import { motion } from "framer-motion";

const steps = [
  "تایید سفارش",
  "در انتظار پرداخت",
  "در حال پردازش",
  "ارسال شده",
  "تحویل داده شده",
];

interface Props {
  currentStep: number; // from 0 to 4
}

export default function ProgressTracker({ currentStep }: Props) {
  return (
    <div className='bg-white dark:bg-dark rounded-xl p-4 shadow-sm mb-6'>
      <h3 className='text-sm font-medium mb-4'>فرایند سفارش</h3>
      <div className='flex items-center justify-between gap-4'>
        {steps.map((step, index) => (
          <div key={index} className='flex-1 text-center'>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`w-full h-2 rounded-full mb-2 ${
                index <= currentStep
                  ? "bg-green-500"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
            <span
              className={`text-xs ${
                index <= currentStep ? "text-green-700" : "text-gray-400"
              }`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
