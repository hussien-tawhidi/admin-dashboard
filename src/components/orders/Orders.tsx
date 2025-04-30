"use client";
import { mockOrders } from "../inventory/data";
import InventoryTop from "../inventory/InventoryTop";
import RecievedOrderTable from "../inventory/recieved-order/RecievedOrderTable";
import { orderStats } from "./data";

export default function Orders() {
  return (
    <div className='my-10'>
      <InventoryTop data={orderStats} />
      <RecievedOrderTable data={mockOrders} />
    </div>
  );
}
