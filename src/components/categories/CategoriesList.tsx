"use client";

import { motion } from "framer-motion";
import EditActionBtn from "../EditActionBtn";
import DeleteActionBtn from "../DeleteActionBtn";
import { categoriesData } from "./cate";

export default function CategoriesList() {
  const handleDelete = async (productId: string) => {
    console.log(productId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='overflow-auto rounded-xl shadow'>
      {/* Desktop Table */}
      <table className='hidden sm:table min-w-full bg-lighter dark:bg-dark text-sm text-right'>
        <thead>
          <tr className='font-thin border-b border-light/50'>
            <th className='px-4 py-5'>نام</th>
            <th className='px-4 py-2'>زیرمجموعه</th>
            <th className='px-4 py-2'>فعال</th>
            <th className='px-4 py-2'>تخفیف</th>
            <th className='px-4 py-2'>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {categoriesData.map((cat, index) => (
            <motion.tr
              key={cat.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className=' cursor-pointer py-5 dark:shadow-light transition-all duration-300 hover:shadow'>
              <td className='border-b border-light/30 px-4 py-2 font-thin'>
                {cat.name}
              </td>
              <td className='border-b border-light/30 px-4 py-2'>
                {cat.parent || "-"}
              </td>
              <td className='border-b border-light/30 px-4 py-2'>
                {cat.active ? <span className='text-green-500'>✓</span> : "✗"}
              </td>
              <td className='border-b border-light/30 px-4 py-2'>
                {cat.discount || "-"}
              </td>
              <td className='border-b border-light/30 px-4 py-2'>
                <div className='flex gap-5'>
                  <EditActionBtn link={`/admin/products/`} text='ویرایش' />
                  <DeleteActionBtn
                    onDelete={() => handleDelete("")}
                    text='حذف'
                    deletingText='در حال حذف...'
                  />
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card View */}
      <div className='sm:hidden flex flex-col gap-4 p-2'>
        {categoriesData.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className='bg-lighter dark:bg-dark rounded-lg p-4 shadow border border-light/20'>
            <p>
              <strong>نام:</strong> {cat.name}
            </p>
            <p>
              <strong>زیرمجموعه:</strong> {cat.parent || "-"}
            </p>
            <p>
              <strong>فعال:</strong>{" "}
              {cat.active ? <span className='text-green-500'>✓</span> : "✗"}
            </p>
            <p>
              <strong>تخفیف:</strong> {cat.discount || "-"}
            </p>
            <div className='flex gap-4 mt-3 opacity-70 justify-around'>
              <EditActionBtn link={`/admin/products/`} text='ویرایش' />
              <DeleteActionBtn
                onDelete={() => handleDelete("")}
                text='حذف'
                deletingText='در حال حذف...'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
