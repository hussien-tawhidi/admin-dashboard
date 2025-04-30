"use client"

import { CiHeadphones, CiViewList } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";

const cards = [
  {
    title: "همه مشتریان",
    value: "+۲۲,۶۳k",
    change: "+۳۴.۴٪",
    color: "green",
    icon: FaUsersViewfinder,
  },
  {
    title: "سفارش‌ها",
    value: "+۴.۵k",
    change: "-۸.۱٪",
    color: "red",
    icon: IoCubeOutline,
  },
  {
    title: "درخواست خدمات",
    value: "+۱.۰۳k",
    change: "+۱۲.۶٪",
    color: "green",
    icon: CiHeadphones,
  },
  {
    title: "فاکتور و پرداخت",
    value: "$۳۸,۹۰۸.۰۰",
    change: "+۴۵.۹٪",
    color: "green",
    icon: CiViewList,
  },
];

export default function StatsCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='bg-lighter dark:bg-dark shadow rounded-xl p-4 space-y-2'>
          <div className='flex items-center justify-between'>
            <span className='text-lg'>{card.title}</span>
            <span className='text-2xl'>{card.icon && <card.icon />}</span>
          </div>
          <div className='text-xl font-bold'>{card.value}</div>
          <div
            className={`text-sm ${
              card.color === "green" ? "text-green-700" : "text-pink"
            }`}>
            {card.change}
          </div>
        </div>
      ))}
    </div>
  );
}
