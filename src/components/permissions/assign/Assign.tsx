"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// فرض می‌کنیم CheckBox از جایی ایمپورت شده
import CheckBox from "../CheckBox";

const mockPermissions = [
  { id: 1, title: "مشاهده سفارشات" },
  { id: 2, title: "ویرایش محصولات" },
  { id: 3, title: "مدیریت کاربران" },
  { id: 4, title: "دسترسی به داشبورد" },
  { id: 5, title: "مدیریت بازپرداخت‌ها" },
];

export default function PermissionsAssignPage() {
  const [email, setEmail] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAssign = () => {
    if (!email || selectedIds.length === 0) {
      setToastType("error");
      setToastMessage("لطفاً همه فیلدها را تکمیل کنید");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setToastType("success");
      setToastMessage(`دسترسی با موفقیت به ${email} اختصاص داده شد`);
      setEmail("");
      setSelectedIds([]);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <motion.div
      className='p-6 space-y-10 relative w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg z-50 ${
              toastType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}>
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className='text-3xl font-bold mb-6 text-right'>اختصاص دسترسی</h1>

      {/* Form */}
      <div className=' bg-lighter dark:bg-dark shadow-md rounded-xl p-6 space-y-6'>
        <div className='space-y-2 text-right'>
          <label htmlFor='email' className='block text-sm font-medium '>
            ایمیل کاربر
          </label>
          <input
            id='email'
            type='email'
            placeholder='user@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full rounded-lg border border-light/30 bg-transparent placeholder:text-light p-2 focus:outline-none focus:ring-0 text-right'
          />
        </div>

        <div className='space-y-4 text-right'>
          <span className='block text-sm font-medium'>انتخاب دسترسی‌ها</span>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {mockPermissions.map((item) => (
              <div className='flex items-center gap-2' key={item.id}>
                <CheckBox
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                  filteredPermissions={[{ id: item.id }]}
                  isChecked={selectedIds.includes(item.id)}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleAssign}
          disabled={loading}
          className={`px-10 mx-auto flex items-center justify-center gap-2 shadow-lg  font-semibold py-2 rounded-lg transition-all ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}>
          {loading ? (
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z'></path>
            </svg>
          ) : success ? (
            <svg
              className='h-6 w-6 text-white'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 13l4 4L19 7'
              />
            </svg>
          ) : (
            "اختصاص دسترسی"
          )}
        </button>
      </div>
    </motion.div>
  );
}
