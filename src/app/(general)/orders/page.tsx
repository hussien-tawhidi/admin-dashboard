import Orders from "@/components/orders/Orders";

export default function ordersPage() {
  return (
    <div>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>سفارش ها</h1>
      <Orders />
    </div>
  );
}
