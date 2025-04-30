"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { ProductImage } from "../../dashboard/types";

interface ProductListProps {
  _id: string;
  name: string;
  price: number | 0;
  subcategories?: string;
  images?: ProductImage[];
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  stock: number;
  status?: "published" | "draft";
  category?: {
    _id: string;
    name: string;
  };
}

interface ProductCardProps {
  product: ProductListProps;
  displayCategory: (categoryName?: string) => string;
  handleDelete: (id: string) => void;
  deleteProductsLoading: boolean;
}

export default function MobileCard({
  product,
  displayCategory,
  handleDelete,
  deleteProductsLoading,
}: ProductCardProps) {
  const router = useRouter();
  const imageUrl = product.images?.[0]?.url || "/avatar.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='bg-white dark:bg-dark border border-light dark:border-darkLight rounded-xl p-4 shadow-sm'>
      <div className='flex flex-wrap justify-between items-center'>
        <div className='flex flex-wrap items-center gap-3 mb-2'>
          <div className='relative w-12 h-12 rounded-full overflow-hidden border border-light shadow'>
            <Image
              src={imageUrl}
              alt={`تصویر ${product.name}`}
              fill
              className='object-cover'
            />
          </div>
          <div>
            <h3 className='font-medium text-sm sm:mb-0 mb-3'>{product.name}</h3>
            <p className='text-xs opacity-70'>
              {displayCategory(product.category?.name)}
            </p>
          </div>
        </div>

        <div className='text-xs opacity-80 mb-2'>
          <p className='sm:mb-0 mb-3'>
            <span className='font-medium'>وزن: </span>
            {product.weight ? `${product.weight} kg` : "-"}
          </p>
          <p>
            <span className='font-medium'>موجودی: </span>
            <span
              className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock > 0 ? `${product.stock} در انبار` : "ناموجود"}
            </span>
          </p>
        </div>
      </div>

      <div className='py-3 px-4 opacity-70'>
        <div className='flex gap-2 justify-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(`/admin/products/${product._id}`)}
            aria-label={`ویرایش ${product.name}`}
            className='relative flex items-center justify-start w-[80px] h-[30px] px-[15px] text-[12px] font-medium text-light rounded-[10px] shadow-[5px_5px_0_rgb(0,0,0)] transition-all duration-300 active:translate-x-[3px] active:translate-y-[3px] active:shadow-darker group'>
            <span className='transition-all duration-300 group-hover:text-transparent'>
              ویرایش
            </span>
            <MdOutlineEdit className='absolute left-[10px] w-[12px] transition-all duration-300 group-hover:left-[43%]' />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDelete(product._id)}
            disabled={deleteProductsLoading}
            aria-label={`حذف ${product.name}`}
            className='relative flex items-center justify-start w-[80px] h-[30px] px-[15px] text-[12px] font-medium rounded-[10px] shadow-[5px_5px_0_rgb(149,2,2)] text-red-700 transition-all duration-300 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_rgb(149,2,2)] group disabled:opacity-50 disabled:cursor-not-allowed'>
            <span className='transition-all duration-300 group-hover:text-transparent'>
              {deleteProductsLoading ? "در حال حذف..." : "حذف"}
            </span>
            <FaTrash className='absolute w-[12px] left-[10px] transition-all duration-300 group-hover:left-[43%] text-red-700' />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
