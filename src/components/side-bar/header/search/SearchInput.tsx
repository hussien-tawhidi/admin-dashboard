"use client";

import { RiCloseLargeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export interface SearchInputProps {
  toggleSearchField: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  searchField: boolean;
  query: string;
  cate: string;
  setCate: (cate: string) => void;
  setQuery: (query: string) => void;
}

const SearchInput = ({
  handleSubmit,
  searchField,
  setQuery,
  toggleSearchField,
}: SearchInputProps) => {
  return (
    <form
      className='flex items-center mx-auto relative pt-5'
      onSubmit={handleSubmit}>
      <div className='flex items-center w-full sm:px-3 px-1'>
        <motion.input
          type='text'
          onChange={(e) => setQuery(e.target.value.trimStart())}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: searchField ? 1 : 0,
            x: searchField ? 0 : 100,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.4,
          }}
          className='w-full relative text-sm focus:outline-none pl-3 focus:ring-0 text-light bg-transparent h-[5vh] border-b border-light/50 placeholder:opacity-80 placeholder:font-normal placeholder:text-light rtl:text-right'
          placeholder='جستجو کنید ...'
        />
      </div>

      <AnimatePresence>
        {searchField && (
          <motion.button
            type='button'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.3,
            }}
            className='text-light cursor-pointer ml-4 absolute left-0 transition-all duration-300 hover:text-dark dark:hover:text-lighter sm:text-xl  h-[9vh]'
            onClick={toggleSearchField}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <RiCloseLargeFill />
          </motion.button>
        )}
      </AnimatePresence>
    </form>
  );
};

export default SearchInput;
