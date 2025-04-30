"use client";

import { motion, AnimatePresence } from "framer-motion";

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.div
            className='bg-lighter dark:bg-dark p-6 rounded-xl shadow-lg max-w-sm w-full'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}>
            <h2 className='text-lg font-bold mb-4 text-center'>
              آیا مطمئن هستید؟
            </h2>
            <div className='flex justify-center gap-4'>
              <button
                onClick={onConfirm}
                className='bg-pink text-lighter px-4 py-2 rounded-md hover:bg-pink'>
                بله، حذف کن
              </button>
              <button
                onClick={onClose}
                className='bg-lighter dark:bg-darker dark:text-light text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300'>
                لغو
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
