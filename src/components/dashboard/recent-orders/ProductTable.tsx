// ProductTable.tsx
import React, { useState } from "react";
import { ProductTableProps } from "./faceProucts";
import OrderRow from "./OrderRow";

const ProductTable: React.FC<ProductTableProps> = ({ filteredOrders }) => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const toggleExpand = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
      <table className='min-w-full dark:divide-light/20 divide-y-2'>
        <thead className='dark:bg-dark'>
          <tr>
            {["ایدی", "اتاریخ", "مشتری", "پرداخت", "وضعیت", "جزییات"].map(
              (item, index) => (
                <th
                  key={index}
                  scope='col'
                  className='px-6 py-3 text-xs font-bold uppercase tracking-wider'>
                  {item}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className='divide-y divide-light/10'>
          {filteredOrders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              expandedOrder={expandedOrder}
              toggleExpand={toggleExpand}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
