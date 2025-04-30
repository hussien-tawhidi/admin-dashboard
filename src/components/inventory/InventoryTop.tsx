"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface props{
  id: number
  title: string
  icon: IconType
  count:number
}

interface prop{
  data:props[]
}

export default function InventoryTop({data}:prop) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
          className='bg-lighter dark:bg-dark rounded-xl shadow p-4 flex flex-col items-center justify-center gap-2 text-center hover:shadow-md transition'>
          <item.icon className='text-3xl text-primary' />
          <div className='text-2xl font-bold'>
            {item.count.toLocaleString("fa-IR")}
          </div>
          <div className='text-sm'>{item.title}</div>
        </motion.div>
      ))}
    </div>
  );
}
