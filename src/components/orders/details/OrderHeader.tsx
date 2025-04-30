"use client";
import { FiEdit2, FiRefreshCcw, FiCornerUpLeft } from "react-icons/fi";

interface OrderHeaderProps {
  orderId: string;
  status: string[];
  createdAt: string;
}

export default function OrderHeader({
  orderId,
  status,
  createdAt,
}: OrderHeaderProps) {
  return (
    <div className='bg-lighter dark:bg-dark rounded-xl p-4 shadow-sm mb-6'>
      <div className='flex items-center justify-between flex-wrap gap-4'>
        <div>
          <h2 className='text-lg font-semibold'>جزئیات سفارش</h2>
          <p className='text-sm mt-1'>
            سفارش / #{orderId} - {createdAt}
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <button className='btn-secondary flex items-center gap-1'>
            <FiRefreshCcw /> بازپرداخت
          </button>
          <button className='btn-secondary flex items-center gap-1'>
            <FiCornerUpLeft /> بازگشت
          </button>
          <button className='btn-primary flex items-center gap-1'>
            <FiEdit2 /> ویرایش سفارش
          </button>
        </div>
      </div>

      <div className='flex gap-2 mt-4'>
        {status.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              tag === "پرداخت شده"
                ? "text-green-500 dark:text-green-700"
                : " dark:text-yellow-700 text-yellow-500"
            }`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
