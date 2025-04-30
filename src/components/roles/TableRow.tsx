
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

// Define animation variants
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface User {
  id: string;
  name: string;
  image: string;
}

interface RoleItem {
  role: string;
  workspace: string;
  tags: string[];
  users: User[];
  status?: string;
}

interface TableRowProps {
  item: RoleItem;
  index: number;
}

const TableRow = ({ item, index }: TableRowProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.tr
      ref={ref}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      variants={rowVariants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className='hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm font-medium'>{item.role}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm'>{item.workspace}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex gap-1'>
          {item.tags.map((tag, i) => (
            <span
              key={`tag-${i}`}
              className='px-2 py-1 text-xs rounded-full bg-pink text-lighter'>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex gap-1'>
          {item.users.map((user,index) => (
            <Image
              width={36}
              height={36}
              alt={`User ${user.name}`}
              key={`user-${index}`}
              className='w-9 h-9 rounded-full'
              src={user.image}
            />
          ))}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        {item.status && (
          <span className='px-2 py-1 text-xs rounded-full bg-pink text-lighter'>
            {item.status}
          </span>
        )}
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center gap-3'>
          <button
            className='p-2 text-pink hover:text-white hover:bg-pink rounded-full transition-colors duration-200'
            aria-label='Delete'>
            <AiOutlineDelete className='w-5 h-5' />
          </button>
          
          <button
            className='p-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded-full transition-colors duration-200'
            aria-label='Edit'>
            <CiEdit className='w-5 h-5' />
          </button>
          <button
            className='p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-full transition-colors duration-200'
            aria-label='View'>
            <FaRegEye className='w-5 h-5' />
          </button>
        </div>
      </td>
    </motion.tr>
  );
};

export default TableRow;
