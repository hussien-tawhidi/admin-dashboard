"use client";

import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import FiterByStock from "./FiterByStock";
import SearchConainer from "@/components/side-bar/header/search/SearchConainer";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface ListActionsProps {
  filter: "all" | "published";
  setFilter: (filter: "all" | "published") => void;
  stockFilter: "all" | "in_stock" | "out_of_stock";
  setStockFilter: (filter: "all" | "in_stock" | "out_of_stock") => void;
  productsCount: string;
  publishedCount: string;
}

export default function ListActions({
  filter,
  setFilter,
  stockFilter,
  setStockFilter,
  productsCount,
  publishedCount,
}: ListActionsProps) {
  const router = useRouter();
  const [searchField, setSearchField] = useState<boolean>(false);

  const handleShowSearchFiled = () => {
    setSearchField((prev) => !prev);
  };
  return (
    <>
      <div className='flex flex-col mb-6'>
        <h2 className='text-2xl font-bold'>محصولات</h2>
        <div className='flex items-center gap-2 w-full relative mt-5'>
          <button
            onClick={() => router.push("/admin/products/create")}
            className='text-center w-64 group rounded-2xl h-10 relative text-dark/60 font-semibold group border border-light/40 text-light'
            type='button'>
            <div className='center  text-light rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 -top-1.5 group-hover:w-full z-10 duration-500'>
              <FaPlus />
            </div>
            <p className='translate-x-2 group-hover:opacity-0 font-thin transition-all duration-500'>
              افزودن محصول جدید
            </p>
          </button>
          <div className='flex items-center'>
            <button onClick={handleShowSearchFiled}>
              <CiSearch className=' font-extrabold cursor-pointer text-light dark:hover:text-lighter hover:text-darker duration-300 transition-all text-2xl' />
            </button>
            <SearchConainer
              searchField={searchField}
              setSearchField={setSearchField}
            />
          </div>
        </div>
      </div>

      <div className='mb-6 flex justify-between items-center'>
        <div className='flex gap-4'>
          <button onClick={() => setFilter("all")}>
            همه ({productsCount})
          </button>
          <button
            className={filter === "published" ? "bg-green-400" : "text-light"}
            onClick={() => setFilter("published")}>
            منتشر شده ({publishedCount})
          </button>
        </div>

        <FiterByStock
          stockFilter={stockFilter}
          setStockFilter={setStockFilter}
        />
      </div>
    </>
  );
}
