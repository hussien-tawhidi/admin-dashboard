"use client";

import { inventory, inventoryData } from "./data";
import InventoryTable from "./InventoryTable";
import InventoryTop from "./InventoryTop";

export default function Inventory() {
  return (
    <div className='my-10'>
      <InventoryTop data={inventory} />
      <InventoryTable data={inventoryData} />
    </div>
  );
}
