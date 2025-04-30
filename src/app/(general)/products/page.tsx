import ProductsLists from "@/components/products/product-list/ProductsLists";
import { Suspense } from "react";

export default function productsListsPage() {
  return (
    <div className='w-[97%] mx-auto '>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold'>لیست محصولات</h1>

      <Suspense fallback={"loading"}>
        <ProductsLists />
      </Suspense>
    </div>
  );
}
