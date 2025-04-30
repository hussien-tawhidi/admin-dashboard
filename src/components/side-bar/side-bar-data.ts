import { CgShoppingCart } from "react-icons/cg";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IconType } from "react-icons";
import {
  BiCube,
  BiTag,
  BiArchiveIn,
  BiShoppingBag,
  BiShield,
  BiKey,
  BiUser,
  BiListUl,
  BiPlus,
  BiCategory,
  BiBox,
} from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { TbArrowsExchange } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";

type SubMenuItem = {
  name: string;
  icon: IconType | null;
  link: string;
};

type MenuItem = {
  name: string;
  icon: IconType;
  subMenu?: SubMenuItem[];
};

export const general: MenuItem[] = [
  {
    name: "محصولات",
    icon: BiCube,
    subMenu: [
      { name: "لیست محصولات", icon: BiListUl, link: "/products" },
      { name: "ایجاد محصول", icon: BiPlus, link: "/products/create" },
    ],
  },
  {
    name: "دسته‌بندی",
    icon: BiTag,
    subMenu: [
      { name: "همه دسته‌ها", icon: BiCategory, link: "/categories" },
      { name: "دسته جدید", icon: BiPlus, link: "/categories/create" },
    ],
  },
  {
    name: "انبار",
    icon: BiArchiveIn,
    subMenu: [
      { name: "گزارش انبار", icon: BiBox, link: "/inventory" },
      {
        name: "سفارشات دریافت شده",
        icon: BiListUl,
        link: "/inventory/received-orders",
      },
    ],
  },
  {
    name: "سفارشات",
    icon: BiShoppingBag,
    subMenu: [{ name: "همه سفارش ها", icon: BiPlus, link: "/orders" }],
  },
  {
    name: "برگشتی ها",
    icon: FiPackage,
    subMenu: [
      { name: "درخواستی ها", icon: TbArrowsExchange, link: "/refund-request" },
      {
        name: "درخواست های جاری",
        icon: RiRefund2Fill,
        link: "/refund-processing",
      },
    ],
  },
  {
    name: "خریدها",
    icon: CgShoppingCart,
    subMenu: [{ name: "لیست ها", icon: BiListUl, link: "/purchases-lists" }],
  },
  {
    name: "فاکتورها",
    icon: LiaFileInvoiceDollarSolid,
    subMenu: [
      { name: "فاکتورهای صادر شده", icon: BiListUl, link: "/invoices" },
    ],
  },
];

export const userProfile: MenuItem[] = [
  {
    name: "نقش‌ها",
    icon: BiShield,
    subMenu: [
      { name: "لیست نقش‌ها", icon: BiListUl, link: "/roles" },
      { name: "ایجاد نقش جدید", icon: BiPlus, link: "/roles/create" },
    ],
  },
  {
    name: "دسترسی‌ها",
    icon: BiKey,
    subMenu: [
      { name: "مجوزهای سیستم", icon: BiListUl, link: "/permissions" },
      { name: "تخصیص دسترسی", icon: BiKey, link: "/permissions/assign" },
    ],
  },
  {
    name: "مشتریان",
    icon: BiUser,
    subMenu: [{ name: "لیست مشتریان", icon: BiListUl, link: "/customers" }],
  },
];
