// OrderRow.tsx
import { motion } from "framer-motion";
import {
  FiCreditCard,
  FiDollarSign,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { OrderTypes } from "./faceProucts";
import OrderDetails from "./OrderDetail";
import ExpandableButton from "./ExpandableButton";

interface OrderRowProps {
  order: OrderTypes; // Replace `any` with your actual order type
  expandedOrder: string | null;
  toggleExpand: (orderId: string) => void;
}

const OrderRow: React.FC<OrderRowProps> = ({
  order,
  expandedOrder,
  toggleExpand,
}) => {
  return (
    <>
      <motion.tr
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
        className='dark:hover:bg-darker hover:bg-gray-50/50 transition-all duration-200 group cursor-pointer'
        onClick={() => toggleExpand(order.id)}>
        <motion.td
          className='px-6 py-4 text-center whitespace-nowrap text-sm font-extralight text-pink'
          whileHover={{ scale: 1.03 }}>
          {order.id}
        </motion.td>
        <td className='px-6 py-4 font-thin text-center whitespace-nowrap text-sm text-light'>
          {order.date}
        </td>
        <td className='px-6 text-center font-thin py-4 whitespace-nowrap text-sm'>
          {order.customerName}
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-sm text-light'>
          <motion.div
            className='flex items-center font-thin justify-center gap-2 w-full'
            whileHover={{ scale: 1.05 }}>
            {order.paymentType === "Credit Card" ? (
              <FiCreditCard />
            ) : (
              <FiDollarSign />
            )}
            {order.paymentType}
          </motion.div>
        </td>
        <td className='px-6 py-4 flex justify-center items-center whitespace-nowrap'>
          <motion.span
            className={`px-2 inline-flex text-xs font-thin leading-5 items-center gap-1 rounded-full ${
              order.status === "Completed"
                ? "text-green-700"
                : "text-yellow-700"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}>
            {order.status === "Completed" ? (
              <FiCheckCircle className='mr-1 inline' />
            ) : (
              <FiClock className='mr-1 inline' />
            )}
            {order.status}
          </motion.span>
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-center text-sm font-medium'>
          <ExpandableButton
            expandedOrder={expandedOrder}
            orderId={order.id}
            onClick={() => toggleExpand(order.id)}
          />
        </td>
      </motion.tr>

      <OrderDetails expandedOrder={expandedOrder} order={order} />
    </>
  );
};

export default OrderRow;
