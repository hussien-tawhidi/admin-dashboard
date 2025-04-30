"use client";

import CreateCategories from "@/components/categories/create-categories/CreateCategories";

export default function createCategories() {
  return (
    <div className='w-[90%] mt-10 mx-auto'>
      <h1 className='md:text-3xl my-10 text-xl font-semibold mr-5'>
        افزودن دسته‌بندی جدید
      </h1>
      <CreateCategories />
    </div>
  );
}
