"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";

export interface Color {
  name: string;
  value: string;
  border?: string;
}

export const COLORS: Color[] = [
  { name: "Red", value: "#ef4444" },
  { name: "Orange", value: "#f97316" },
  { name: "Yellow", value: "#eab308" },
  { name: "Green", value: "#22c55e" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#a855f7" },
  { name: "Pink", value: "#ec4899" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff", border: "border border-gray-300" },
];

interface ColorPickerProps {
  selectedColors: Color[];
  setSelectedColors: (colors: Color[]) => void;
}

export default function ColorPicker({
  selectedColors,
  setSelectedColors,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSelected = (color: Color) =>
    selectedColors.some((c) => c.value === color.value);

  const toggleColor = (color: Color) => {
    if (isSelected(color)) {
      setSelectedColors(selectedColors.filter((c) => c.value !== color.value));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 rounded-xl border ${
          isOpen ? "border-light" : "border-none"
        } bg-lighter dark:bg-dark shadow-sm hover:shadow-md transition-all`}>
        <div className='flex items-center gap-2 flex-wrap'>
          {selectedColors.length === 0 ? (
            <span className='text-gray-500'>Select colors</span>
          ) : (
            selectedColors.map((color) => (
              <div
                key={color.value}
                className={`w-5 h-5 rounded-full ${color.border || ""}`}
                style={{ backgroundColor: color.value }}
              />
            ))
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <FiChevronDown className='text-gray-500' />
        </motion.div>
      </motion.button>

      {/* Color Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className='absolute z-10 mt-2 w-full rounded-xl bg-lighter dark:bg-dark shadow-lg border border-light overflow-hidden grid grid-cols-3 gap-2 p-3'>
            {COLORS.map((color) => {
              const selected = isSelected(color);
              return (
                <motion.li
                  key={color.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleColor(color)}
                  className={`flex flex-col items-center p-2 rounded-lg cursor-pointer ${
                    selected
                      ? "border-light border"
                      : "hover:border-pink hover:border"
                  }`}>
                  <div
                    className={`w-8 h-8 rounded-full mb-1 ${
                      color.border || ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                  <span className='text-xs text-gray-600'>{color.name}</span>
                  {selected && <FiCheck className='text-indigo-500 mt-1' />}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
