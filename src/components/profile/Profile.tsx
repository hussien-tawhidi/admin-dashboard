"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EditBtn from "./EditBtn";
import { addressInfo, personalInfo } from "./data";

export default function Profile() {
  return (
    <div className='mx-auto p-6 space-y-8'>
      {/* پروفایل */}
      <motion.div
        className='rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        {/* تصویر پروفایل */}
        <div className='relative w-28 h-28 rounded-full'>
          <Image
            src='/user.jpg'
            alt='آواتار'
            fill
            className='object-cover rounded-full'
          />
          {/* آیکون ویرایش روی تصویر */}
          <EditBtn />
        </div>

        {/* اطلاعات کاربری */}
        <div className='flex-1 text-right'>
          <h2 className='text-2xl font-bold'>ناتاشیا خلیرا</h2>
          <p className='flex gap-2 items-center'>
            <span className='font-semibold'>دسترسی:</span>ادمین
          </p>
          <p className='flex gap-2 items-center'>
            <span className='font-semibold'>آدرس:</span>
            لیدز، انگلستان
          </p>
        </div>
      </motion.div>

      {/* اطلاعات شخصی */}
      <motion.div
        className='bg-lighter dark:bg-dark rounded-xl shadow-md p-6 space-y-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        {/* هدر کارت */}
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-semibold'>اطلاعات شخصی</h3>
          <EditBtn text='ویرایش' />
        </div>

        {/* اطلاعات */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
          {personalInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}>
              <p className='mb-1'>{item.label}:</p>
              <p className='font-thin opacity-80'>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* آدرس */}
      <motion.div
        className='bg-lighter dark:bg-dark rounded-xl shadow-md p-6 space-y-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-semibold'>آدرس</h3>
          <EditBtn text='ویرایش' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
          {addressInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}>
              <p className='mb-1'>{item.label}:</p>
              <p className='font-thin opacity-80'>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
