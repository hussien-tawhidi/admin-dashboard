import PurchaseTable from "@/components/purchase/PurchaseTable";

export default function purchasesListsPage() {
  return (
    <div className='max-w-[98%] my-10 mx-auto overflow-hidden'>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>
        لیست خریدها
      </h1>
      <PurchaseTable />
    </div>
  );
}
