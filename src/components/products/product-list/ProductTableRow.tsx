"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProductImage } from "../../dashboard/types";
import EditActionBtn from "@/components/EditActionBtn";
import DeleteActionBtn from "@/components/DeleteActionBtn";

interface ProductProps {
  _id: string;
  name: string;
  price: number;
  stock: number;
  images?: ProductImage[];
  weight?: number;
  subcategories?: string;
  category?: {
    _id: string;
    name: string;
  };
}

interface ProductTableRowProps {
  product: ProductProps;
  index: number;
  displayCategory: (name?: string) => string;
  handleDelete: (id: string) => void;
  deleteProductsLoading: boolean;
}

export default function ProductTableRow({
  product,
  index,
  displayCategory,
  handleDelete,
  deleteProductsLoading,
}: ProductTableRowProps) {
  const imageUrl = product.images?.[0]?.url || "/avatar.jpg";

  return (
    <motion.tr
      key={product._id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className='hover:shadow-lg border-b border-light/10 cursor-pointer shadow-light dark:shadow-darker/30 transition-all duration-100'>
      <td className='py-3 px-4'>
        <div className='flex items-center gap-3'>
          <div className='rounded-full shadow-xl border overflow-hidden border-light relative w-10 h-10'>
            <Image
              src={imageUrl}
              alt={`تصویر ${product.name}`}
              fill
              className='object-cover'
              sizes='40px'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/avatar.jpg";
              }}
            />
          </div>
          <span className='opacity-80 text-sm font-thin'>{product.name}</span>
        </div>
      </td>
      <td className='py-3 px-4 text-yellow flex flex-col'>
        {displayCategory(product.category?.name)}
        <span className='text-[12px] font-thin opacity-80'>
          {displayCategory(product.subcategories)}
        </span>
      </td>
      <td className='py-3 px-4 font-thin opacity-80 text-sm'>
        {product.weight ? `${product.weight} kg` : "-"}
      </td>
      <td className='py-3 px-4 font-thin opacity-80 text-sm'>
        <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
          {product.stock > 0 ? `${product.stock} در انبار` : "ناموجود"}
        </span>
      </td>
      <td className='py-3 px-4 opacity-70'>
        <div className='items-center flex gap-2'>
          <EditActionBtn
            link={`/admin/products/${product._id}`}
            text='ویرایش'
          />
          <DeleteActionBtn
            onDelete={() => handleDelete(product._id)}
            text='حذف'
            deletingText='در حال حذف...'
            isLoading={deleteProductsLoading}
          />
        </div>
      </td>
    </motion.tr>
  );
}
