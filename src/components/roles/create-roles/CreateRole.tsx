"use client";
import CreateBtn from "@/components/CreateBtn";
import Input from "@/components/Input";
import { useState } from "react";
import CustomSelect from "./CustomeSelect";
import CustomeRadioBtn from "../CustomeRadioBtn";

const CreateRole = () => {
  const [roleName, setRoleName] = useState("");
  const [tag, setTag] = useState("");
  const [userName, setUserName] = useState("");
  const [formData, setFormData] = useState({
    roleName: "",
    workspace: "",
    tag: "",
    userName: "",
    status: "active",
  });

  const workspaces = [
    "فیسبوک",
    "اسلک",
    "زوم",
    "آنالیتیکس",
    "میت",
    "میل",
    "استریپ",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-lighter dark:bg-dark rounded-lg shadow-md rtl'>
      <h1 className='text-2xl font-bold  mb-6'>ایجاد نقش جدید</h1>

      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>اطلاعات نقش</h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-10'>
            {/* Role Name */}
            <Input label='نام نقش' value={roleName} setValue={setRoleName} />

            {/* Workspace */}
            <CustomSelect
              label='انتخاب فضای کاری'
              options={workspaces}
              value={formData.workspace}
              onChange={(e) =>
                setFormData({ ...formData, workspace: e.target.value })
              }
              required
              placeholder='فضای کاری را انتخاب کنید'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            {/* Tag */}
            <Input label='نام کاربری' value={userName} setValue={setUserName} />

            <Input label='برچسب ها' value={tag} setValue={setTag} />
          </div>

          {/* Status */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>
              وضعیت کاربر
            </label>
            <div className='flex gap-4'>
              <CustomeRadioBtn />
            </div>
          </div>

          {/* Submit Button */}
          <CreateBtn text='ارسال درخواست' />
        </form>
      </div>
    </div>
  );
};

export default CreateRole;
