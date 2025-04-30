"use client";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubMenuItem = {
  name: string;
  link: string;
  icon: IconType | null;
};

type MenuItem = {
  name: string;
  icon: IconType;
  subMenu?: SubMenuItem[];
};

type MenuListProps = {
  data: MenuItem[];
  activeSubmenus: Record<string, boolean>;
  toggleSubmenu: (menuName: string) => void;
};

export default function MenuList({
  data,
  activeSubmenus,
  toggleSubmenu,
}: MenuListProps) {
  const path = usePathname();

  return (
    <ul className='overflow-hidden'>
      {data.map((item, index) => {
        const isAnySubActive = item.subMenu?.some((sub) => sub.link === path);

        return (
          <motion.li
            key={index}
            className='border-b dark:border-light/30 border-dark/10'
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.05 + 0.1 },
            }}>
            {/* Main Menu Item */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center group justify-between px-6 py-3 cursor-pointer transition-all hover:text-darker dark:hover:text-lighter ${
                isAnySubActive ? "text-darker dark:text-lighter" : ""
              }`}
              onClick={() => item.subMenu && toggleSubmenu(item.name)}>
              <div className='flex items-center'>
                <motion.span
                  className={`ml-3 group-hover:text-pink ${
                    isAnySubActive ? "text-pink" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}>
                  <item.icon />
                </motion.span>
                <span
                  className={`font-thin ${
                    isAnySubActive ? "dark:text-lighter text-darker" : ""
                  }`}>
                  {item.name}
                </span>
              </div>
              {item.subMenu && (
                <motion.span
                  animate={{
                    rotate: activeSubmenus[item.name] ? 180 : 0,
                    transition: { duration: 0.3 },
                  }}>
                  <BiChevronDown />
                </motion.span>
              )}
            </motion.div>

            {/* Submenu Items */}
            <AnimatePresence>
              {item.subMenu && activeSubmenus[item.name] && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { type: "spring", stiffness: 300, damping: 20 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      opacity: { duration: 0.15 },
                      height: { duration: 0.2 },
                    },
                  }}>
                  {item.subMenu.map((subItem, subIndex) => {
                    const isActive = path === subItem.link;

                    return (
                      <motion.li
                        key={subIndex}
                        className='pr-12 py-2 flex items-center group hover:text-darker dark:hover:text-lighter transition-colors cursor-pointer'
                        initial={{ x: -20, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            delay: subIndex * 0.05,
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          },
                        }}
                        exit={{
                          x: -20,
                          opacity: 0,
                          transition: { duration: 0.1 },
                        }}
                        whileHover={{ x: 5 }}>
                        <Link
                          href={subItem.link}
                          className={`flex items-center ${
                            isActive ? "dark:text-lighter text-darker" : ""
                          }`}>
                          {subItem.icon && (
                            <motion.span
                              className={`ml-3 group-hover:text-pink ${
                                isActive ? "text-pink" : ""
                              }`}
                              whileHover={{ scale: 1.1 }}>
                              <subItem.icon />
                            </motion.span>
                          )}
                          <span>{subItem.name}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
