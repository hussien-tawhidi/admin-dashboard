"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { searchContaineDate } from "./data";

interface Props {
  toggleSearchField: () => void;
  searchField: boolean;
}

const SearchSuggestion = ({ toggleSearchField, searchField }: Props) => {
  return (
    <section className='flex flex-col px-1 pb-3 sm:px-4 mt-10'>
      <AnimatePresence>
        {searchField && (
          <motion.div className='flex flex-col space-y-3'>
            {searchContaineDate.map((data, index) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1 + 0.2,
                }}
                whileHover={{ x: -5 }}
                whileTap={{ x: 2 }}>
                <Link href={data.link} onClick={toggleSearchField}>
                  <span className='text-[12px] font-thin text-light transition-all hover:text-slate-800 dark:hover:text-lighter sm:text-sm'>
                    {data.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SearchSuggestion;
