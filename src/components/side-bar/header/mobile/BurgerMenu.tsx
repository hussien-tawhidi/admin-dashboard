"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuList from "../../lg-side-bar/MenuList";
import { general, userProfile } from "../../side-bar-data";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenus, setActiveSubmenus] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu sections with individual animation delays
  const menuSections = [
    {
      title: "عمومی",
      data: general,
      delay: 0.1,
    },
    {
      title: "کاربران",
      data: userProfile,
      delay: 0.3,
    },
  ];

  return (
    <div className='relative'>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className='flex flex-col items-center justify-center w-8 h-8 gap-1.5 focus:outline-none z-50'
        aria-label={isOpen ? "Close menu" : "Open menu"}>
        <motion.span
          className='w-6 h-0.5 bg-white rounded-full'
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className='w-6 h-0.5 bg-white rounded-full'
          animate={{
            opacity: isOpen ? 0 : 1,
            width: isOpen ? 0 : "1.5rem",
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className='w-6 h-0.5 bg-white rounded-full'
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 z-40'
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className='fixed top-0 left-0 h-full w-64 pt-20 bg-lighter dark:bg-dark z-40 shadow-xl overflow-y-auto'>
              {menuSections.map((section) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: section.delay }}
                  className='mb-8'>
                  <motion.h2 className='text-lg font-semibold px-6 py-3 border-b dark:border-light/20 border-dark/10'>
                    {section.title}
                  </motion.h2>
                  <MenuList
                    activeSubmenus={activeSubmenus}
                    data={section.data}
                    toggleSubmenu={toggleSubmenu}
                  />
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
