"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hashtags({
  hashtags,
  setHashtags,
}: {
  hashtags: string[];
  setHashtags: (tags: string[]) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (["Enter", "Tab", ","].includes(e.key)) {
      e.preventDefault();
      addHashtag();
    }
  };

  const addHashtag = () => {
    const tag = inputValue.trim().replace(/#/g, "");
    if (tag && !hashtags.includes(tag)) {
      setHashtags([...hashtags, tag]);
    }
    setInputValue(""); // Clear input regardless
  };

  const removeHashtag = (tagToRemove: string) => {
    setHashtags(hashtags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className='space-y-2 my-3'>
      <div
        className={`flex flex-wrap gap-2 min-h-12 p-2 border ${
          hashtags.length ? "border-pink/30" : "border-light/30"
        } rounded-lg bg-lighter dark:bg-dark transition-all`}
        onClick={() => inputRef.current?.focus()}>
        <AnimatePresence>
          {hashtags.map((tag) => (
            <motion.div
              key={tag}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='flex items-center gap-1 px-3 py-1 bg-light/10 text-light rounded-full text-sm'>
              #{tag}
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation();
                  removeHashtag(tag);
                }}
                aria-label={`حذف ${tag}`}>
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        <input
          ref={inputRef}
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addHashtag}
          placeholder='اضافه کردن هشتگ (Enter)'
          className='flex-1 min-w-[100px] px-2 py-1 placeholder:text-light outline-none bg-transparent text-right'
        />
      </div>
      <p className='text-xs'>
        هشتگ‌های مرتبط با محصول را اضافه کنید (با Enter جدا کنید)
      </p>
    </div>
  );
}
