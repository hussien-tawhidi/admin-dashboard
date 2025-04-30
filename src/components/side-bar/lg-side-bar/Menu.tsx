"use client";
import { useState } from "react";
import { general, userProfile } from "../side-bar-data";
import MenuList from "./MenuList";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const [activeSubmenus, setActiveSubmenus] = useState<Record<string, boolean>>(
    {}
  );
  const path = usePathname();
  console.log("🚀 ~ Sidebar ~ path:", path);

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName], // Now TypeScript knows prev[menuName] can be undefined
    }));
  };

  return (
    <div
      className='h-screen w-60 [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-light 
  dark:[&::-webkit-scrollbar-track]:dark:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-light scrollbar-hide shadow-xl fixed right-0 top-0 overflow-y-auto'>
      <div className='flex border-b items-center sticky top-0 z-10 dark:text-lighter bg-lighter pb-2 dark:bg-dark pt-4'>
        <Image
          src={"/assets/light-logo.png"}
          alt='logo'
          width={100}
          height={100}
          className='object-cover h-14 w-auto opacity-80'
        />
        <h3 className='text-3xl font-bold'>مدیریت</h3>
      </div>

      <nav className='pt-8 bg-lighter dark:bg-dark'>
        <div className='mb-8'>
          <h2 className='text-lg font-semibold px-6 py-3 border-b dark:border-light/20 border-dark/10'>
            عمومی
          </h2>
          <Link
            href={"/"}
            className={`flex items-center group justify-between px-6 py-3 cursor-pointer transition-all hover:text-darker dark:hover:text-lighter ${
              path === "/" && "text-darker dark:text-lighter"
            }`}>
            <span className='flex items-center gap-2'>
              <MdOutlineDashboard
                className={`${path === "/" && "text-pink"}`}
              />{" "}
              داشبورد
            </span>
          </Link>
          <MenuList
            activeSubmenus={activeSubmenus}
            data={general}
            toggleSubmenu={toggleSubmenu}
          />
          <Link
            href={"/setting"}
            className={`flex items-center group justify-between px-6 py-3 cursor-pointer transition-all hover:text-darker dark:hover:text-lighter ${
              path === "/setting" && "text-darker dark:text-lighter"
            }`}>
            <span className='flex items-center gap-2'>
              <CiSettings className={`${path === "/setting" && "text-pink"}`} />{" "}
              تنظیمات
            </span>
          </Link>
        </div>

        <div className='mb-8'>
          <h2 className='text-lg font-semibold px-6 py-3 border-b dark:border-light/20 border-dark/10'>
            کاربران
          </h2>
          <Link
            href={"/admin-profile"}
            className={`flex items-center group justify-between px-6 py-3 cursor-pointer transition-all hover:text-darker dark:hover:text-lighter ${
              path === "/admin-profile" &&
              "text-darker dark:text-lighter"
            }`}>
            <span className='flex items-center gap-2'>
              <MdOutlineDashboard
                className={`${
                  path === "/admin-profile" && "text-pink"
                }`}
              />{" "}
              پروفایل
            </span>
          </Link>
          <MenuList
            activeSubmenus={activeSubmenus}
            data={userProfile}
            toggleSubmenu={toggleSubmenu}
          />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
