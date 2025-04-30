"use client";
import Image from "next/image";

interface ProductItem {
  name: string;
  size: string;
  status: string;
  quantity: number;
  price: number;
  text: number;
  amount: number;
  image: string;
}

interface ProductTableProps {
  items: ProductItem[];
}

export default function ProductTable({ items }: ProductTableProps) {
  return (
    <div className='bg-lighter dark:bg-dark rounded-xl p-4 shadow-sm mb-6'>
      <h3 className='text-sm font-semibold mb-4'>محصولات</h3>
      <div className='overflow-x-auto'>
        <table className='min-w-full text-sm text-right'>
          <thead>
            <tr className='border-b dark:border-dark border-light'>
              <th className='p-3 whitespace-nowrap'>نام محصول و سایز</th>
              <th className='p-3 whitespace-nowrap'>وضعیت</th>
              <th className='p-3 whitespace-nowrap'>تعداد</th>
              <th className='p-3 whitespace-nowrap'>قیمت</th>
              <th className='p-3 whitespace-nowrap'>متن</th>
              <th className='p-3 whitespace-nowrap'>مجموع</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product, idx) => (
              <tr
                key={idx}
                className='border-b dark:border-dark border-light hover:bg-gray-50 dark:hover:bg-dark/20 transition'>
                <td className='p-3 flex items-center gap-3'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className='rounded'
                  />
                  <div>
                    <div>{product.name}</div>
                    <div className='text-xs text-gray-500'>
                      سایز: {product.size}
                    </div>
                  </div>
                </td>
                <td className='p-3'>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      product.status === "Ready"
                        ? "dark:text-green-700 text-green-500"
                        : "dark:text-yellow-700 text-yellow-500"
                    }`}>
                    {product.status === "Ready" ? "آماده" : "در حال بسته‌بندی"}
                  </span>
                </td>
                <td className='p-3'>{product.quantity}</td>
                <td className='p-3'>${product.price.toFixed(2)}</td>
                <td className='p-3'>${product.text.toFixed(2)}</td>
                <td className='p-3'>${product.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
