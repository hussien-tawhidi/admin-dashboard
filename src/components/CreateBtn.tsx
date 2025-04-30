"use client";
import { motion } from "framer-motion";

interface props {
  loading?: boolean;
  loadingText?: string;
  text: string;
}

export default function CreateBtn({ text, loading, loadingText }: props) {
  return (
    <div className='flex justify-center my-5'>
      <motion.button
        type='submit'
        disabled={loading}
        className='relative overflow-hidden dark:bg-dark bg-lighter dark:text-light px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all'
        whileHover={!loading ? { scale: 1.02 } : {}}
        whileTap={!loading ? { scale: 0.98 } : {}}
        initial={false}>
        {/* Loading animation */}
        {loading && (
          <motion.div
            className='absolute inset-0 dark:bg-darker'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        <span className='relative z-10 flex items-center justify-center gap-2'>
          {loading ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className='inline-block'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </motion.span>
              {loadingText}
            </>
          ) : (
            <>
              <svg
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
              {text}
            </>
          )}
        </span>
      </motion.button>
    </div>
  );
}
