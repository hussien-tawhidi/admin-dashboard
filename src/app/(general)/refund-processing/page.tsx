import RefundProcessing from "@/components/refund/refund-processing/RefundProcessing";

export default function refundProcessingPage() {
  return (
    <div>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>
       بازگشتی های جاری
      </h1>
      <RefundProcessing />
    </div>
  );
}
