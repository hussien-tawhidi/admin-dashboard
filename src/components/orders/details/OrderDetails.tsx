"use client";
import { orderProductSample } from "../data";
import OrderHeader from "./OrderHeader";
import OrderTimeline from "./OrderTimeLine";
import ProductTable from "./ProductTable";
import ProgressTracker from "./ProgressTracker";

export default function OrderDetails() {
  return (
    <div className=''>
      <OrderHeader
        orderId='0758267/90'
        status={["پرداخت شده", "در حال انجام"]}
        createdAt='۲۳ آوریل ۲۰۲۴، ساعت ۶:۲۳ عصر'
      />
      <ProgressTracker currentStep={2} />
      <ProductTable items={orderProductSample} />
      <OrderTimeline />
    </div>
  );
}
