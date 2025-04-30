"use client";
import CreateProduct from "@/components/products/create-product/CreateProduct";
export default function createProductPage() {
  return (
    <div>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>
        افزودن محصول جدید
      </h1>
      <CreateProduct />
    </div>
  );
}
