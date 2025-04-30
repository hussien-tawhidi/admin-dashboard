"use client";

import Image from "next/image";

const data = [
  { id: 1, title: "مد و پوشاک", image: "/categories/fashion.png" },
  { id: 2, title: "گوشی موبایل", image: "/categories/phone.png" },
  { id: 3, title: "کالای دیجیتالی", image: "/categories/digital.png" },
  { id: 4, title: "کفش و کتونی", image: "/categories/shoes.png" },
];

export default function CategoryBanner() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
      {data.map((item) => (
        <div
          key={item.id}
          className='flex flex-col items-center justify-center bg-white dark:bg-dark rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
          <Image
            width={200}
            height={150}
            src={item.image}
            alt={item.title}
            className='object-cover h-full w-auto mb-2'
          />
          <span className='text-sm font-medium text-center text-gray-700 dark:text-gray-200'>
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
