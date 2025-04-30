import Inventory from "@/components/inventory/Inventory";

export default function inventoryPage() {
  return (
    <div>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>
        گزارش انبار
      </h1>
      <Inventory />
    </div>
  );
}
