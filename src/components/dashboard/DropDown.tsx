"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

interface DropDownProps {
  items: string[];
  label?: string;
  onSelect?: (selectedItem: string) => void;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
}

export default function DropDown({
  items,
  label = "دسته‌بندی‌ها",
  onSelect = () => {},
  className = "",
  buttonClassName = "",
  menuClassName = "",
  itemClassName = "",
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative flex items-center border border-light/30 rounded-lg ${className}`}
      ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between bg-lighter w-full gap-2 rounded-md dark:bg-dark py-2 px-4 border border-transparent text-center text-sm transition-all hover:shadow-lg focus:bg-lighter dark:focus:bg-darker focus:shadow-none active:bg-pink active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ${buttonClassName}`}
        type='button'
        aria-expanded={isOpen}
        aria-haspopup='menu'>
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className='flex items-center'>
          <IoIosArrowDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role='menu'
            className={`absolute z-10 min-w-[180px] overflow-auto rounded-lg dark:bg-dark bg-lighter p-1.5 shadow-lg focus:outline-none mt-1 rtl ${menuClassName}`}>
            {items.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                role='menuitem'
                onClick={() => handleItemClick(item)}
                className={`cursor-pointer text-right text-light text-sm flex w-full items-center rounded-md p-3 transition-all dark:hover:bg-darker hover:bg-transparent hover:text-darker dark:hover:text-light dark:focus:bg-darker active:border dark:active:bg-darker dark:border-none ${itemClassName}`}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
