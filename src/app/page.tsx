import Dashboard from "@/components/dashboard/Dashboard";
import OrdersTable from "@/components/dashboard/recent-orders/RecentOrders";

export default function Home() {
  return (
    <main className='w-full'>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>داشبورد</h1>
      <Dashboard />
      <OrdersTable />
    </main>
  );
}
