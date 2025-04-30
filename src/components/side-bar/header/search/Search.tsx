"use client";

import { MouseEvent } from "react";
import { MdClear } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";
import NotFoundResult from "./NotFoundResult";
import Loading from "./Loading";
import SearchResult from "./SearchResult";
import SearchSuggestion from "./SearchSuggestion";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  category: string;
  images: {
    url: string;
  }[];
}

interface Props {
  toggleSearchField: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  searchField: boolean;
  query: string;
  cate: string;
  setCate: (cate: string) => void;
  setQuery: (query: string) => void;
  loading: boolean;
  results: Product[];
}

const Search = ({
  searchField,
  cate,
  setQuery,
  setCate,
  handleSubmit,
  query,
  toggleSearchField,
  loading,
  results,
}: Props) => {
  const handleContainerClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleSearchField();
    }
  };

  return (
    <AnimatePresence>
      {searchField && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 backdrop-blur-[2px] bg-dark/10 z-50 overflow-hidden'
          onClick={handleContainerClick}>
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className='md:w-[50vw] sm:w-[80vw] w-[100vw] mx-auto bg-lighter dark:bg-dark sm:rounded-br-3xl sm:rounded-bl-3xl shadow-lg dark:shadow-light/20'
            onClick={(e: MouseEvent) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}>
              <SearchInput
                cate={cate}
                handleSubmit={handleSubmit}
                query={query}
                searchField={searchField}
                setCate={setCate}
                setQuery={setQuery}
                toggleSearchField={toggleSearchField}
              />

              {cate && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={() => setCate("")}
                  className='flex items-center gap-1 text-sm text-light px-4 py-1 hover:bg-dark/5 dark:hover:bg-light/5 rounded transition-colors'
                  whileTap={{ scale: 0.95 }}>
                  <MdClear className='text-pink' />
                  {cate}
                </motion.button>
              )}

              <AnimatePresence mode='wait'>
                {loading ? (
                  <motion.div
                    key='loading'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex justify-center items-center my-5'>
                    <div className='mb-5 text-center'>
                      <p className='text-light'>Searching...</p>
                      <Loading />
                    </div>
                  </motion.div>
                ) : query && results.length === 0 ? (
                  <motion.div
                    key='not-found'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}>
                    <NotFoundResult cate={cate} query={query} />
                  </motion.div>
                ) : query && results.length > 0 ? (
                  <motion.div
                    key='results'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}>
                    <SearchResult
                      cate={cate}
                      query={query}
                      results={results}
                      toggleSearchField={toggleSearchField}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key='suggestions'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}>
                    <SearchSuggestion
                      searchField={searchField}
                      toggleSearchField={toggleSearchField}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
