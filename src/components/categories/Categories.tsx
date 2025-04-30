"use client";

import CreateBtn from "../CreateBtn";
import CategoriesList from "./CategoriesList";
import CategoryBanner from "./CategoryBanner";

export default function Categories() {
  return (
    <div>
      <CategoryBanner />
      <div className='flex justify-start'>
        <CreateBtn
          text='ایحاد دسته بندی جدید'
          loadingText='در حال ساخت دسته بندی'
        />
      </div>
      <CategoriesList />
    </div>
  );
}
