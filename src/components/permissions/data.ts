export interface permessionTypes {
  id: number;
  name: string;
  assignedTo: string[];
  createdAt: string;
  updatedAt: string;
  details: string;
}

export const persionTableHeader = [
  {name:"نام"}
]

export const permissionsData = [
  {
    id: 1,
    name: "مدیریت کاربران",
    assignedTo: ["مدیر"],
    createdAt: "۱۴۰۲/۱۲/۰۴",
    updatedAt: "امروز",
    details: "دسترسی کامل به مدیریت کاربران شامل ایجاد، ویرایش و حذف کاربران.",
  },
  {
    id: 2,
    name: "مدیریت مالی",
    assignedTo: ["مدیر سیستم", "توسعه‌دهنده"],
    createdAt: "۱۴۰۳/۰۴/۰۷",
    updatedAt: "دیروز",
    details: "مدیریت مالی شرکت شامل تراکنش‌ها، فاکتورها و گزارش‌های مالی.",
  },
  {
    id: 3,
    name: "مدیریت محتوا",
    assignedTo: ["مدیر"],
    createdAt: "۱۴۰۲/۰۹/۱۱",
    updatedAt: "۶ آذر ۱۴۰۲",
    details: "ایجاد و ویرایش محتوای وبسایت شامل مقالات، محصولات و صفحات.",
  },
  {
    id: 4,
    name: "گزارش‌گیری",
    assignedTo: ["مدیر", "توسعه‌دهنده"],
    createdAt: "۱۴۰۲/۰۵/۲۲",
    updatedAt: "امروز",
    details: "گزارش‌های آماری سیستم شامل کاربران، تراکنش‌ها و فعالیت‌ها.",
  },
  {
    id: 5,
    name: "مدیریت سفارشات",
    assignedTo: ["مدیر فروش", "اپراتور"],
    createdAt: "۱۴۰۳/۰۱/۱۵",
    updatedAt: "۲ روز پیش",
    details: "مدیریت سفارشات مشتریان و پیگیری مراحل پردازش.",
  },
  {
    id: 6,
    name: "پشتیبانی فنی",
    assignedTo: ["توسعه‌دهنده", "پشتیبان"],
    createdAt: "۱۴۰۲/۱۱/۲۰",
    updatedAt: "هفته گذشته",
    details: "دسترسی به سیستم پشتیبانی و مدیریت تیکت‌ها.",
  },
  {
    id: 7,
    name: "مدیریت انبار",
    assignedTo: ["مدیر انبار"],
    createdAt: "۱۴۰۲/۰۸/۰۳",
    updatedAt: "ماه گذشته",
    details: "مدیریت موجودی کالاها و انبارگردانی.",
  },
  {
    id: 8,
    name: "تنظیمات سیستم",
    assignedTo: ["مدیر سیستم"],
    createdAt: "۱۴۰۲/۰۳/۱۰",
    updatedAt: "۳ ماه پیش",
    details: "تنظیمات اصلی سیستم و پیکربندی‌های پایه.",
  },
  {
    id: 9,
    name: "مدیریت تخفیف‌ها",
    assignedTo: ["مدیر فروش"],
    createdAt: "۱۴۰۳/۰۲/۲۸",
    updatedAt: "دیروز",
    details: "تعریف و مدیریت کدهای تخفیف و پیشنهادهای ویژه.",
  },
  {
    id: 10,
    name: "مدیریت وبلاگ",
    assignedTo: ["نویسنده", "مدیر محتوا"],
    createdAt: "۱۴۰۲/۱۰/۱۲",
    updatedAt: "هفته گذشته",
    details: "مدیریت مطالب وبلاگ و دسته‌بندی‌ها.",
  },
  {
    id: 11,
    name: "مدیریت نظرات",
    assignedTo: ["اپراتور"],
    createdAt: "۱۴۰۲/۰۷/۰۵",
    updatedAt: "دیروز",
    details: "تایید و مدیریت نظرات کاربران.",
  },
  {
    id: 12,
    name: "مدیریت منوها",
    assignedTo: ["مدیر سیستم", "توسعه‌دهنده"],
    createdAt: "۱۴۰۲/۰۴/۱۸",
    updatedAt: "۲ هفته پیش",
    details: "مدیریت منوهای اصلی و فرعی وبسایت.",
  },
  {
    id: 13,
    name: "مدیریت فرم‌ها",
    assignedTo: ["مدیر سیستم"],
    createdAt: "۱۴۰۳/۰۳/۰۱",
    updatedAt: "امروز",
    details: "مدیریت فرم‌های تماس و نظرسنجی‌ها.",
  },
  {
    id: 14,
    name: "مدیریت پرداخت‌ها",
    assignedTo: ["مدیر مالی"],
    createdAt: "۱۴۰۲/۰۶/۲۲",
    updatedAt: "ماه گذشته",
    details: "مدیریت درگاه‌های پرداخت و تراکنش‌ها.",
  },
  {
    id: 15,
    name: "مدیریت اعلان‌ها",
    assignedTo: ["مدیر سیستم"],
    createdAt: "۱۴۰۲/۰۹/۳۰",
    updatedAt: "هفته گذشته",
    details: "مدیریت اعلان‌های سیستم و کاربران.",
  },
  {
    id: 16,
    name: "مدیریت نقش‌ها",
    assignedTo: ["مدیر سیستم"],
    createdAt: "۱۴۰۲/۰۱/۱۰",
    updatedAt: "۳ ماه پیش",
    details: "تعریف و مدیریت نقش‌های کاربری و دسترسی‌ها.",
  },
  {
    id: 17,
    name: "مدیریت فایل‌ها",
    assignedTo: ["مدیر محتوا"],
    createdAt: "۱۴۰۲/۱۱/۰۵",
    updatedAt: "دیروز",
    details: "مدیریت فایل‌های آپلود شده در سیستم.",
  },
  {
    id: 18,
    name: "مدیریت سئو",
    assignedTo: ["متخصص سئو"],
    createdAt: "۱۴۰۳/۰۲/۱۰",
    updatedAt: "امروز",
    details: "تنظیمات سئو و بهینه‌سازی صفحات.",
  },
  {
    id: 19,
    name: "مدیریت پروفایل",
    assignedTo: ["همه کاربران"],
    createdAt: "۱۴۰۲/۰۲/۱۵",
    updatedAt: "سال گذشته",
    details: "مدیریت پروفایل کاربری و اطلاعات شخصی.",
  },
  {
    id: 20,
    name: "مدیریت API",
    assignedTo: ["توسعه‌دهنده ارشد"],
    createdAt: "۱۴۰۳/۰۱/۲۰",
    updatedAt: "هفته گذشته",
    details: "مدیریت دسترسی‌های API و کلیدهای احراز هویت.",
  },
];