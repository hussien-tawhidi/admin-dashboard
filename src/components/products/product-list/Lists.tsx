"use client";
import { ListsProps } from "../../dashboard/types";
import MobileCard from "./MobileCard";
import ProductTableRow from "./ProductTableRow";

export default function Lists({
  filteredProducts,
  deleteProductsLoading,
  handleDelete,
}: ListsProps) {
  const displayCategory = (
    category: { _id: string; name: string } | string | undefined | null
  ): string => {
    if (!category) return "بدون دسته‌بندی";
    if (typeof category === "string") return category;
    if (category.name) return category.name;
    return "بدون دسته‌بندی";
  };

  return (
    <div className='overflow-x-auto w-full'>
      <table className='hidden md:table w-full rounded-lg'>
        <thead className='border-t border-b border-light/50'>
          <tr>
            {["نام", "دسته بندی", "وزن", "موجودی", "عملیات"].map(
              (item, index) => (
                <th
                  className='py-3 px-4 text-right text-thin font-semibold opacity-60'
                  key={index}>
                  {item}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductTableRow
              key={product._id}
              product={product}
              index={index}
              displayCategory={displayCategory}
              handleDelete={handleDelete}
              deleteProductsLoading={deleteProductsLoading}
            />
          ))}
        </tbody>
      </table>

      {/* Mobile View: Card layout */}
      <div className='md:hidden block'>
        {filteredProducts.map((product) => (
          <MobileCard
            key={product._id}
            product={product}
            displayCategory={displayCategory}
            handleDelete={handleDelete}
            deleteProductsLoading={deleteProductsLoading}
          />
        ))}
      </div>
    </div>
  );
}
