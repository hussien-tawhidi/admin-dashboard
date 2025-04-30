"use client";

import InventoryTop from "../InventoryTop";
import { mockOrders, revceivedOrders } from "../data";
import RecievedOrderTable from "./RecievedOrderTable";

export default function RecievedOrders() {
  return (
    <>
      <InventoryTop data={revceivedOrders} />
      <div className='mt-10'>
        <h6 className='mr-5'>همه سفارشات دریافت شده</h6>
        <RecievedOrderTable data={mockOrders} />
      </div>
    </>
  );
}
