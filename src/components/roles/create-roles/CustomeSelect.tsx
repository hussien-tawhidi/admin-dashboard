import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

interface CustomSelectProps {
  label?: string;
  options: string[];
  value: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
  required?: boolean;
  placeholder?: string;
  name?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label = "انتخاب فضای کاری",
  options = [],
  value = "",
  onChange,
  required = false,
  placeholder = "فضای کاری را انتخاب کنید",
  name = "workspace",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (selectedValue: string) => {
    onChange({ target: { name, value: selectedValue } });
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className='relative mb-4 bg-lighter dark:bg-dark' ref={selectRef}>
      <label
        htmlFor={name}
        className='block text-sm font-medium mb-1 text-right'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      {/* Custom select trigger */}
      <div
        className={`w-full px-4 py-2 rounded-md cursor-pointer 
          flex items-center justify-between transition-all duration-200
          ${isOpen ? "ring-2 ring-light" : "hover:border-gray-400"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup='listbox'
        aria-expanded={isOpen}>
        <span>{value || placeholder}</span>
        <FiChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>

      {/* Custom dropdown */}
      {isOpen && (
        <div
          className='absolute z-50 bg-lighter dark:bg-dark w-full mt-1 rounded-md shadow-lg overflow-hidden'
          role='listbox'>
          {/* Search input */}
          <div className='p-2 border-b border-light dark:border-gray-700'>
            <input
              type='text'
              placeholder='جستجو...'
              className='w-full px-3 py-1 text-sm rounded-md placeholder:text-light bg-transparent focus:outline-none focus:ring-0'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              aria-label='Search options'
            />
          </div>

          {/* Options list */}
          <div className='max-h-60 overflow-y-auto scrollbar-hide' role='list'>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 cursor-pointer flex items-center justify-between
                   `}
                  onClick={() => handleSelect(option)}
                  role='option'
                  aria-selected={value === option}>
                  <span>{option}</span>
                  {value === option && <FiCheck />}
                </div>
              ))
            ) : (
              <div className='px-4 py-2 text-center'>نتیجه‌ای یافت نشد</div>
            )}
          </div>
        </div>
      )}

      {/* Hidden native select for form submission */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className='hidden focus:ring-0'
        aria-hidden='true'>
        <option value=''>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
