import {
  FiBriefcase,
  FiCheckSquare,
  FiClipboard,
  FiClock,
  FiDollarSign,
  FiPackage,
  FiShoppingCart,
  FiTruck,
} from "react-icons/fi";

export const orderStats = [
  {
    id: 1,
    title: "باز گشتی ها",
    count: 490,
    icon: FiDollarSign, // for example
  },
  {
    id: 2,
    title: "لغو سفارش",
    count: 241,
    icon: FiShoppingCart,
  },
  {
    id: 3,
    title: "ارسال شده",
    count: 630,
    icon: FiPackage,
  },
  {
    id: 4,
    title: "در حال ارسال",
    count: 170,
    icon: FiTruck,
  },
  { id: 5, title: "در انتظار بررسی", count: 210, icon: FiClipboard },
  { id: 6, title: "در انتظار پرداخت", count: 608, icon: FiClock },
  { id: 7, title: "تحویل داده شده", count: 200, icon: FiCheckSquare },
  { id: 8, title: "در حال پردازش", count: 656, icon: FiBriefcase },
];

export const orderProductSample = [
  {
    name: "Men Black Slim Fit T-shirt",
    size: "M",
    status: "Ready",
    quantity: 1,
    price: 80,
    text: 3,
    amount: 83,
    image: "/demo.png",
  },
  {
    name: "Dark Green Cargo Pant",
    size: "M",
    status: "Packaging",
    quantity: 3,
    price: 330,
    text: 4,
    amount: 334,
    image: "/demo.png",
  },
  {
    name: "Men Dark Brown Wallet",
    size: "S",
    status: "Ready",
    quantity: 1,
    price: 132,
    text: 5,
    amount: 137,
    image: "/demo.png",
  },
  {
    name: "Kid’s Yellow T-shirt",
    size: "S",
    status: "Packaging",
    quantity: 2,
    price: 220,
    text: 3,
    amount: 223,
    image: "/demo.png",
  },
];
