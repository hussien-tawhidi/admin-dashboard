interface User {
  id: string;
  name: string;
  image: string;
  email?: string; // Optional field
}

interface Role {
  role: string;
  workspace: string;
  tags: string[];
  users: User[]; // Now using User objects
  status: string;
  action: string;
}

export const roles: Role[] = [
  {
    role: "مدیر فضای کاری",
    workspace: "فیسبوک",
    tags: ["مدیریت", "ادمین"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "فعال",
    action: "ویرایش پروفایل",
  },
  {
    role: "مالک محصول",
    workspace: "اسلک",
    tags: ["مدیریت", "رهبری"],
    users: [
      {
        id: "user-001",
        name: "فاطمه حسنی",
        image: "/categories/digital.png",
        email: "ali@example.com",
      },
    ],
    status: "داده‌محور",
    action: "+۱۲ عضو جدید",
  },
  {
    role: "طراح محصول",
    workspace: "زوم",
    tags: ["طراحی", "UI/UX"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "در حال پیشرفت",
    action: "آپلود طرح‌ها",
  },
  {
    role: "تحلیلگر داده",
    workspace: "آنالیتیکس",
    tags: ["داده‌کاوی", "هوش تجاری"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "در حال پردازش",
    action: "خروجی Excel",
  },
  {
    role: "لید فنی",
    workspace: "+ افزودن فضای کاری",
    tags: ["توسعه", "معماری"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
    ],
    status: "پشتیبان فنی",
    action: "+ افزودن کاربر فنی",
  },
  {
    role: "مدیر محصول",
    workspace: "میت",
    tags: ["استراتژی", "سیستم‌ها"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "بررسی نقشه راه",
    action: "بروزرسانی اسپرینت",
  },
  {
    role: "مالک ارشد محصول",
    workspace: "میل",
    tags: ["مدیریت ارشد", "تصمیم‌گیر"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "تعیین چشمانداز",
    action: "تنظیم KPIها",
  },
  {
    role: "رئیس تیم پشتیبانی",
    workspace: "استریپ",
    tags: ["پشتیبانی", "مدیریت تیم"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "پاسخگویی فعال",
    action: "اختصاص تیکت",
  },
  {
    role: "معمار راهکارها",
    workspace: "کانفلوئنس",
    tags: ["راهکارها", "یکپارچه‌سازی"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "طراحی معماری",
    action: "مدیریت کامپوننت‌ها",
  },
  {
    role: "توسعه‌دهنده ارشد",
    workspace: "گیت‌هاب",
    tags: ["کدنویسی", "بررسی کد"],
    users: [
      {
        id: "user-001",
        name: "علی محمدی",
        image: "/user.jpg",
        email: "ali@example.com",
      },
      {
        id: "user-002",
        name: "سارا احمدی",
        image: "/demo1.jpg",
      },
    ],
    status: "در حال توسعه",
    action: "مرور درخواست‌ها",
  },
];
export const tableHeaders = [
  {
    id: "role",
    label: "نقش",
  },
  {
    id: "workspace",
    label: "فضای کاری",
  },
  {
    id: "tags",
    label: "برچسب‌ها",
  },
  {
    id: "users",
    label: "کاربران",
  },
  {
    id: "status",
    label: "وضعیت",
  },
  {
    id: "action",
    label: "عملیات",
  },
];
