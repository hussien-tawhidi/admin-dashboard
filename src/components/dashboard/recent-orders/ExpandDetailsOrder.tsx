"use client";
import { AnimatePresence, motion } from "framer-motion";
import { OrderTypes } from "./faceProucts";

interface ExpandedOrderDetailsProps {
  order: OrderTypes;
  expandedOrder: string | null;
}

const ExpandedOrderDetails = ({
  order,
  expandedOrder,
}: ExpandedOrderDetailsProps) => {
  return (
    <AnimatePresence>
      {expandedOrder === order.id && (
        <motion.tr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className='dark:bg-dark'>
          <td colSpan={6} className='p-0'>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className='overflow-hidden'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className='px-6 py-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div>
                    <h4 className='text-sm font-medium text-light mb-1'>
                      محصول
                    </h4>
                    <p className='text-sm'>{order.product}</p>
                  </div>
                  <div>
                    <h4 className='text-sm font-medium text-light mb-1'>
                      تماس
                    </h4>
                    <p className='text-sm'>{order.phone}</p>
                  </div>
                  <div>
                    <h4 className='text-sm font-medium text-light mb-1'>
                      آدرس
                    </h4>
                    <p className='text-sm'>
                      {expandedOrder === order.id
                        ? order.address
                        : `${order.address.slice(0, 20)}...`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </td>
        </motion.tr>
      )}
    </AnimatePresence>
  );
};

export default ExpandedOrderDetails;
