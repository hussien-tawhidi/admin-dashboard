"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props<T extends string | number> {
  value: T;
  setValue: (value: T) => void;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  dir?: "rtl" | "ltr";
  className?: string;
}

export default function Input<T extends string | number>({
  value,
  setValue,
  type = "text",
  label,
  required = false,
  dir = "rtl",
  className = "",
}: Props<T>) {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (type === "number") {
      const numValue = Number(inputValue);
      setValue(
        (inputValue === "" || isNaN(numValue) ? inputValue : numValue) as T
      );
    } else {
      setValue(inputValue as T);
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      dir={dir}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <motion.input
        type={type}
        value={value}
        onChange={handleChange}
        className={`
          w-full p-4 text-light bg-transparent
          border border-light/30 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent
          transition-all duration-200 ease-in-out
          peer
          ${hasValue && "border-light"}
        `}
        whileFocus={{ scale: 1.02 }}
      />

      <motion.label
        className={`
          absolute ${dir === "rtl" ? "right-10" : "left-4"}
            pointer-events-none
          transform origin-top transition-all duration-200 ease-in-out
          peer-focus:-translate-y-6 peer-focus:scale-75  
          peer-focus:px-2
          ${
            hasValue
              ? "-translate-y-6 scale-75 bg-lighter dark:bg-dark px-2"
              : "translate-y-4"
          }
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}>
        {label}
        {required && <span className='text-red-500 ml-1'>*</span>}
      </motion.label>
    </motion.div>
  );
}
