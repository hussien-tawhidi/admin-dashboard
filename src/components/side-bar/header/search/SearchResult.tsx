"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

 interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  category: string;
  images: {
    url: string;
  }[];
}

interface SearchResultProps {
  toggleSearchField: () => void;
  query: string;
  cate: string;
  results: Product[];
}

const SearchResult = ({
  results,
  toggleSearchField,
  cate,
  query,
}: SearchResultProps) => {
  const router = useRouter();

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className='text-slate-700 bg-slate-300 font-bold'>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <ul className='mt-4 border rounded-lg'>
      <p className='text-sm border-b p-3 uppercase'>
        {results.length} {results.length === 1 ? "product" : "products"} found
      </p>
      <div>
        {results.map((product) => (
          <li
            key={product._id}
            onClick={() => {
              toggleSearchField();
              router.push(`/product_details/${product._id}`);
            }}
            className='px-4 py-2 border-b last:border-none md:gap-5 gap-3 cursor-pointer hover:bg-lighter flex items-center text-sm'>
            <Image
              src={product.images[0].url}
              width={100}
              height={100}
              alt={`image for ${product.name}`}
              className='object-cover h-12 w-12 rounded'
              priority={false}
            />
            <div>
              <p className='flex flex-col'>
                <span>{highlightText(product.name, query)}</span>
                <span className='text-[12px] font-light'>
                  {product.description.slice(0, 50)}...
                </span>
              </p>
              <p className='flex gap-2 py-1 items-center'>
                <span className='font-medium'>
                  {(
                    product.price -
                    (product.price * product.discountPrice) / 100
                  ).toFixed(2)}
                  $
                </span>
                <del className='text-[10px] opacity-80 font-normal'>
                  {product.price}$
                </del>
                <span className='uppercase text-[10px] bg-gray-100 px-2 py-0.5 rounded'>
                  {product.category}
                </span>
              </p>
            </div>
          </li>
        ))}
      </div>
      <div className='border-t'>
        <button
          className='w-full p-3 bg-slate-50 transition-all hover:bg-slate-200 text-sm font-medium'
          onClick={(e) => {
            e.stopPropagation();
            toggleSearchField();
            router.push(
              `/search?query=${query}&category=${cate}&allResults=true`
            );
          }}>
          View All Results
        </button>
      </div>
    </ul>
  );
};

export default SearchResult;
