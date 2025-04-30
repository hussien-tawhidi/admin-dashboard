"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextAreaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}

export default function TextArea({
  value = "",
  onChange = () => {},
  placeholder = " ",
  label = "متن",
  className = "",
  rows = 4,
  disabled = false,
  required = false,
  name = "",
  id = "",
}: TextAreaProps) {
  return (
    <motion.div
      className={`mt-5 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <div className='relative w-full'>
        <motion.textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className='peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-light/30 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-light focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
          whileFocus={{ scale: 1.01 }}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-light peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-light/50 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-light/50 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {label}
        </label>
      </div>
    </motion.div>
  );
}
