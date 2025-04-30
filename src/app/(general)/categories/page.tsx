"use client";

import Categories from "@/components/categories/Categories";

export default function categoriesPage() {
  return (
    <div className='w-[97%] mx-auto mb-10'>
      <h1 className='md:text-3xl mt-10 text-xl font-semibold mr-5'>
        دسته‌بندی ها
      </h1>
      <Categories />
    </div>
  );
}
