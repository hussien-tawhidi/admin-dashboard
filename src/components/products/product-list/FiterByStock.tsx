import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type StockFilter = "all" | "in_stock" | "out_of_stock";

interface FilterByStockProps {
  stockFilter: StockFilter;
  setStockFilter: (value: StockFilter) => void;
}

export default function FilterByStock({
  stockFilter,
  setStockFilter,
}: FilterByStockProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "all", label: "همه وضعیت‌های موجودی" },
    { value: "in_stock", label: "موجود در انبار" },
    { value: "out_of_stock", label: "ناموجود" },
  ] as const;

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='border-b border-light/30 rounded px-3 py-1 text-[14px] bg-lighter dark:bg-dark text-light flex items-center justify-between w-full gap-3'>
        {options.find((opt) => opt.value === stockFilter)?.label}
        <span className='mr-2'>
          {!isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </span>
      </button>

      {isOpen && (
        <div className='absolute z-10 mt-1 w-full bg-lighter dark:bg-dark text-light rounded shadow-lg'>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setStockFilter(option.value);
                setIsOpen(false);
              }}
              className={`px-3 font-thin text-justify text-[12px] py-2 cursor-pointer hover:bg-gray-200 ${
                stockFilter === option.value ? "text-lighter" : ""
              }`}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
