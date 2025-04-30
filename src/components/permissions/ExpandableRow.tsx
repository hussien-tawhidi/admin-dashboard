import { motion, AnimatePresence } from "framer-motion";

type ExpandableRowProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export default function ExpandableRow({
  isOpen,
  children,
}: ExpandableRowProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.tr
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}>
          <td colSpan={6} className='p-4'>
            {children}
          </td>
        </motion.tr>
      )}
    </AnimatePresence>
  );
}
