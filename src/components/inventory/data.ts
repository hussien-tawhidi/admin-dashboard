import { BsClockHistory } from "react-icons/bs";
import { CiStopwatch, CiViewList } from "react-icons/ci";
import { IoCloudDoneOutline, IoCubeOutline } from "react-icons/io5";
import { PiUsersFourThin } from "react-icons/pi";
import { RiProgress4Line } from "react-icons/ri";
import { TbGitBranchDeleted } from "react-icons/tb";

export const inventoryData = [
  {
    id: 1,
    name: "کفش نایک",
    sku: "SHOE123",
    stock: 15,
    price: 720000,
    status: "موجود",
    category: "کفش و کتونی",
  },
  {
    id: 2,
    name: "گوشی سامسونگ",
    sku: "MOB987",
    stock: 0,
    price: 12500000,
    status: "ناموجود",
    category: "گوشی موبایل",
  },
  {
    id: 3,
    name: "تلویزیون LG",
    sku: "TVLG550",
    stock: 4,
    price: 18500000,
    status: "موجود",
    category: "کالای دیجیتالی",
  },
  {
    id: 4,
    name: "شلوار جین",
    sku: "JEANS556",
    stock: 25,
    price: 350000,
    status: "موجود",
    category: "مد و پوشاک",
  },
  {
    id: 5,
    name: "ساعت هوشمند",
    sku: "SMART001",
    stock: 7,
    price: 2950000,
    status: "موجود",
    category: "کالای دیجیتالی",
  },
  {
    id: 6,
    name: "کیف زنانه چرمی",
    sku: "BAG2023",
    stock: 3,
    price: 890000,
    status: "موجود",
    category: "مد و پوشاک",
  },
  {
    id: 7,
    name: "لپ‌تاپ ایسوس",
    sku: "LAPASU789",
    stock: 2,
    price: 32500000,
    status: "موجود",
    category: "کالای دیجیتالی",
  },
  {
    id: 8,
    name: "هدفون بلوتوثی",
    sku: "HEAD999",
    stock: 0,
    price: 1200000,
    status: "ناموجود",
    category: "کالای دیجیتالی",
  },
  {
    id: 9,
    name: "پاوربانک 20000",
    sku: "POWER20K",
    stock: 12,
    price: 650000,
    status: "موجود",
    category: "کالای دیجیتالی",
  },
  {
    id: 10,
    name: "پیراهن مردانه",
    sku: "SHIRT001",
    stock: 10,
    price: 430000,
    status: "موجود",
    category: "مد و پوشاک",
  },
];

export const inventory = [
  { id: 1, title: "تمام محصولات", icon: IoCubeOutline, count: 400 },
  { id: 2, title: "محصولات موجود", icon: CiViewList, count: 298 },
  { id: 3, title: "محصولات تمام شده", icon: TbGitBranchDeleted, count: 102 },
  { id: 4, title: "همه مشتریان", icon: PiUsersFourThin, count: 9853 },
];

export const revceivedOrders = [
  { id: 1, title: "در حالی بررسی", icon: RiProgress4Line, count: 108 },
  { id: 2, title: "در انتظار پرداخت", icon: CiStopwatch, count: 298 },
  { id: 3, title: "تحویل داده شد", icon: IoCloudDoneOutline, count: 102 },
  { id: 4, title: "در حال انجام است", icon: BsClockHistory, count: 9853 },
];

export const mockOrders = [
  {
    id: "ORD001",
    name: "علی محمدی",
    amount: 850000,
    items: 3,
    recievedStatus: "در حال پردازش",
    payMentStatus: "پرداخت شده",
  },
  {
    id: "ORD002",
    name: "مریم رضایی",
    amount: 1250000,
    items: 5,
    recievedStatus: "تحویل داده شده",
    payMentStatus: "پرداخت شده",
  },
  {
    id: "ORD003",
    name: "حسین احمدی",
    amount: 450000,
    items: 2,
    recievedStatus: "لغو شده",
    payMentStatus: "در انتظار پرداخت",
  },
  {
    id: "ORD004",
    name: "زهرا کریمی",
    amount: 690000,
    items: 1,
    recievedStatus: "در حال پردازش",
    payMentStatus: "پرداخت شده",
  },
  {
    id: "ORD005",
    name: "رضا شریفی",
    amount: 990000,
    items: 4,
    recievedStatus: "تحویل داده شده",
    payMentStatus: "پرداخت شده",
  },
  {
    id: "ORD006",
    name: "نگار سلطانی",
    amount: 300000,
    items: 1,
    recievedStatus: "لغو شده",
    payMentStatus: "در انتظار پرداخت",
  },
  {
    id: "ORD007",
    name: "کیوان فراهانی",
    amount: 750000,
    items: 3,
    recievedStatus: "در حال پردازش",
    payMentStatus: "پرداخت شده",
  },
  {
    id: "ORD008",
    name: "سمیه نادری",
    amount: 820000,
    items: 2,
    recievedStatus: "تحویل داده شده",
    payMentStatus: "پرداخت شده",
  },
  {
    id: "ORD009",
    name: "محمدرضا تقوی",
    amount: 670000,
    items: 2,
    recievedStatus: "لغو شده",
    payMentStatus: "در انتظار پرداخت",
  },
  {
    id: "ORD010",
    name: "الهام اکبری",
    amount: 1080000,
    items: 5,
    recievedStatus: "تحویل داده شده",
    payMentStatus: "پرداخت شده",
  },
];

