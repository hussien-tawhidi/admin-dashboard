"use client";
import { useState } from "react";

const CustomRadioBtn = () => {
  const [checked, setChecked] = useState<string | null>(null);
  console.log("🚀 ~ CustomRadioBtn ~ checked:", checked);

  const handleChange = (index: string) => {
    setChecked(index);
  };

  return (
    <div className='flex items-center gap-3 justify-center space-x-4'>
      {["فعال", "غیر فعال"].map((index) => (
        <div className='flex items-center gap-2' key={index}>
          <label className='relative flex items-center cursor-pointer'>
            <input
              type='radio'
              name='custom-radio'
              className='appearance-none flex items-center justify-center w-8 h-8 bg-light dark:bg-darker rounded-full shadow-inner transition-all duration-300 hover:scale-110 hover:shadow-none checked:border-yellow-500'
              checked={checked === index}
              onChange={() => handleChange(index)}
            />
            <div
              className={`absolute left-1/2 flex items-center justify-center transform -translate-x-1/2 transition-all duration-300 dark:bg-light bg-lighter rounded-full ${
                checked === index ? "scale-100 rotate-360" : "scale-0"
              }`}
              style={{
                top: "auto",
                width: "0.6em",
                height: "0.6em",
              }}
            />
          </label>
          {index}
        </div>
      ))}
    </div>
  );
};

export default CustomRadioBtn;
