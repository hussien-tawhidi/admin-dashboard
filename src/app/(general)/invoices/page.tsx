import InvoiceList from "@/components/invoices/InvoiceList";

export default function invoicesPage() {
  return (
    <div className='my-10'>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>فاکتورها</h1>
      <InvoiceList />
    </div>
  );
}
