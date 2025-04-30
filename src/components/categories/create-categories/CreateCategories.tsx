"use client";

import CreateBtn from "@/components/CreateBtn";
import Input from "@/components/Input";
import ImageUpload from "@/components/products/create-product/ImageUpload";
import React, { useState } from "react";

export default function CreateCategories() {
  const [category, setCategory] = useState("");
  return (
    <div>
      <ImageUpload />
      <Input setValue={setCategory} value={category} label='ایجاد دسته بندی' />
      <CreateBtn text='ارسال درخواست' />
    </div>
  );
}
