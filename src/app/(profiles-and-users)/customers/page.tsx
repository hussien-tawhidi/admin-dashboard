import CustomersTable from "@/components/customers/CustomerTable";
import StatsCards from "@/components/customers/StateCard";

export default function customerPage() {
  return (
    <div className='p-6 space-y-8'>
      <h1 className='text-2xl font-bold'>لیست مشتریان</h1>
      <StatsCards />
      <CustomersTable />
    </div>
  );
}
