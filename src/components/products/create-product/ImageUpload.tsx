import Image from "next/image";
import { useState, useRef, ChangeEvent } from "react";
import { MdDeleteOutline } from "react-icons/md";

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImage(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div
        className='w-full max-w-md p-8 dark:bg-dark bg-lighter border dark:border-none border-dashed rounded-lg text-center cursor-pointer transition-colors duration-300'
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleImageChange}
          accept='image/jpeg, image/jp2, image/png'
          className='hidden'
        />

        {image ? (
          <div className='mb-4'>
            <Image
              width={300}
              height={300}
              src={image}
              alt='تصویر آپلود شده'
              className='max-h-64 mx-auto rounded-md'
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImage(null);
              }}
              className='mt-4 px-3 py-1 text-pink/50 border border-pink/50 hover:border-pink hover:text-pink transition-colors duration-300'>
              <MdDeleteOutline />
            </button>
          </div>
        ) : (
          <>
            <div className='flex flex-col items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 mb-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
              <p className='text-lg font-medium mb-2'>
                تصویر خود را اینجا رها کنید، یا کلیک کنید
              </p>
              <p className='text-sm'>
                فرمت‌های پشتیبانی شده: JPG, JPEG2000, PNG
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
