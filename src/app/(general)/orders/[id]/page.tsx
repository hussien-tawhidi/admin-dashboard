import OrderDetails from "@/components/orders/details/OrderDetails";

export default function orderDetailsPage() {
  return (
    <div className='w-[95%] mx-auto'>
      <h1 className='md:text-3xl my-10 text-xl font-semibold'>جزئیات سفارش</h1>
      <OrderDetails />
    </div>
  );
}
