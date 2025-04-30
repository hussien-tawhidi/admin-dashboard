"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { CiBellOn, CiSearch, CiSettings } from "react-icons/ci";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Image from "next/image";
import SearchConainer from "../search/SearchConainer";
import BurgerMenu from "./BurgerMenu";
const Mobile = () => {

  const [searchField, setSearchField] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleShowSearchFiled = () => {
    setSearchField((prev) => !prev);
  };


  return (
    <div className='flex items-center justify-between px-5 py-5 bg-lighter dark:bg-dark w-full'>
      <div className='flex items-center gap-3'>
        <BurgerMenu/>
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
};

export default Mobile;
