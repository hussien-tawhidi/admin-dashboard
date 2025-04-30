import RecievedOrders from "@/components/inventory/recieved-order/RecievedOrders";

export default function recievedOrdersPage() {
  return (
    <div>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>
        سفارشات دریافت شده
      </h1>
      <RecievedOrders />
    </div>
  );
}
