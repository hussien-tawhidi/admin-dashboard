"use client";
import { useState } from "react";
import SearchConainer from "./search/SearchConainer";
import { CiBellOn, CiSearch, CiSettings } from "react-icons/ci";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const [searchField, setSearchField] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  console.log("🚀 ~ Header ~ theme:", theme);

  const handleShowSearchFiled = () => {
    setSearchField((prev) => !prev);
  };
  return (
    <div className='dark:bg-dark bg-lighter border-b flex items-center justify-between px-5 py-5'>
      <div className='flex items-center gap-5'>
        <div className='border rounded-full'>
          <Image
            src={
              theme === "dark"
                ? "/assets/light-logo.png"
                : "/assets/dark-logo.png"
            }
            alt='logo'
            width={100}
            height={100}
            className='object-cover h-8 w-8 rounded-full opacity-80'
          />
        </div>
        <button onClick={handleShowSearchFiled}>
          <CiSearch className='font-extrabold cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all text-2xl' />
        </button>
        <SearchConainer
          searchField={searchField}
          setSearchField={setSearchField}
        />
      </div>
      <div className='flex items-center gap-6'>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'>
          {theme === "dark" ? (
            <IoSunnyOutline className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold text-2xl' />
          ) : (
            <IoMoonOutline className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold text-2xl' />
          )}
        </button>

        <CiBellOn className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold text-2xl' />
        <CiSettings className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold text-2xl' />
        <div className='border border-pink rounded-full'>
          <Image
            src={"/assets/light-logo.png"}
            alt='logo'
            width={100}
            height={100}
            className='object-cover h-8 w-8 rounded-full opacity-80'
          />
        </div>
      </div>
    </div>
  );
}
