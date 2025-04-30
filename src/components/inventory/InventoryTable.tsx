"use client";
import { motion } from "framer-motion";

interface props {
  id: number;
  name: string;
  sku: string;
  stock: number;
  price: number;
  status: string;
  category: string;
}

interface prop{
  data:props[]
}

export default function InventoryTable({data}:prop) {
  return (
    <div className='overflow-x-auto p-4'>
      <table className='min-w-full bg-lighter dark:bg-dark shadow rounded-xl text-sm text-right'>
        <thead>
          <tr className='bg-lighter dark:bg-darker border-b'>
            <th className='p-3'>نام</th>
            <th className='p-3'>کد</th>
            <th className='p-3'>دسته‌بندی</th>
            <th className='p-3'>قیمت</th>
            <th className='p-3'>موجودی</th>
            <th className='p-3'>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`border-b cursor-pointer border-light/30 transition-all duration-300 hover:shadow dark:shadow-light/50 `}>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>{item.sku}</td>
                <td className='p-3'>{item.category}</td>
                <td className='p-3'>
                  {item.price.toLocaleString("fa-IR")} تومان
                </td>
                <td className='p-3'>{item.stock}</td>
                <td className='p-3'>
                  {item.stock > 0 ? (
                    <span className='text-green-700 font-thin'>✓ موجود</span>
                  ) : (
                    <span className='text-pink font-thin'>✗ ناموجود</span>
                  )}
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className='p-5 text-center text-gray-400'>
                محصولی یافت نشد.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
