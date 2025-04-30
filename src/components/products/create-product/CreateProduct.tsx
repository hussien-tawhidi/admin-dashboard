"use client";

import { useState } from "react";
import Image from "next/image";
import ImageUpload from "./ImageUpload";
import Input from "@/components/Input";
import DropDown from "../../dashboard/DropDown";
import TextArea from "@/components/TextArea";
import ColorPicker, { Color } from "./ColorPicker";
import { brands, categories } from "./data";
import Hashtags from "./Hashtags";
import CreateBtn from "@/components/CreateBtn";
export default function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [features, setFeatures] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");
  console.log("🚀 ~ CreateProduct ~ setImageUrl:", setImageUrl)
  const [loading, setLoading] = useState(false);
const [colors, setColors] = useState<Color[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedBrand(null); // Reset brand when category changes
  };

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
  };
  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='p-4'>
        <ImageUpload />
        <div className='mt-4 p-4 dark:bg-dark bg-lighter'>
          <h6 className='mb-5'> اطلاعات محصول</h6>
          <DropDown
            items={categories}
            label={selectedCategory || "دسته بندی ها"}
            onSelect={handleCategorySelect}
            className='my-4'
          />
          <div className='grid gap-3 md:grid-cols-2'>
            <Input label='نام محصول' setValue={setName} value={name} />

            <Input
              label='قیمت'
              setValue={setPrice}
              type='number'
              value={price}
            />

            <Input
              label='موجودی'
              setValue={setStock}
              value={stock}
              type='number'
            />
            <Input label='% تخفیف' setValue={setDiscount} value={discount} />
          </div>
          <Hashtags hashtags={hashtags} setHashtags={setHashtags} />
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label='توضیحات محصول'
            rows={5}
            required
          />
          <TextArea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            label='ویژه گی ها'
            rows={5}
            required
          />
        </div>
        <div className='grid gap-3 md:grid-cols-4 sm:grid-cols-2 items-center mt-5 dark:bg-dark'>
          <ColorPicker selectedColors={colors} setSelectedColors={setColors} />

          <DropDown
            items={selectedCategory ? brands[selectedCategory] || [] : []}
            label={selectedBrand || "برند"}
            onSelect={handleBrandSelect}
            className='my-4'
          />
        </div>
        {imageUrl && (
          <div className='w-32 h-32 relative border'>
            <Image
              src={imageUrl}
              alt='پیش‌نمایش تصویر'
              fill
              className='object-cover rounded'
            />
          </div>
        )}

        <CreateBtn
          text='ارسال درخواست'
          loading={loading}
          loadingText='در حال ارسال درخواست'
        />
      </form>
    </div>
  );
}
