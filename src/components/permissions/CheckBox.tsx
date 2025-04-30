type NeumorphicCheckboxProps = {
  selectedIds: number[];
  filteredPermissions: { id: number }[]; // یک یا چند permission که این چک‌باکس نمایندگی‌شون می‌کنه
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  isChecked: boolean;
};

const CheckBox = ({
  filteredPermissions,

  setSelectedIds,
  isChecked,
}: NeumorphicCheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // اضافه کردن آیتم‌های جدید بدون حذف قبلی‌ها
      setSelectedIds((prev) => [
        ...prev,
        ...filteredPermissions.map((item) => item.id),
      ]);
    } else {
      // حذف آیتم‌های این چک‌باکس از انتخاب‌ها
      setSelectedIds((prev) =>
        prev.filter((id) => !filteredPermissions.some((item) => item.id === id))
      );
    }
  };

  return (
    <label className='flex items-center gap-2 cursor-pointer'>
      <input
        type='checkbox'
        className='absolute opacity-0 h-0 w-0'
        checked={isChecked}
        onChange={handleChange}
      />

      <div
        className={`
          relative
          h-5 w-5
          rounded-full
          bg-gray-200 dark:bg-gray-700
          transition-all duration-300
          ${
            isChecked
              ? "shadow-[inset_2px_2px_4px_rgba(100,116,139,0.5),inset_-2px_-2px_4px_rgba(100,116,139,0.3)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(74,85,104,0.3)]"
              : "shadow-[3px_3px_5px_rgba(197,197,197,0.8),-3px_-3px_5px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_5px_rgba(0,0,0,0.5),-3px_-3px_5px_rgba(74,85,104,0.5)]"
          }
        `}>
        {isChecked && (
          <div
            className='
              absolute
              left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-2 h-3
              border-r-2 border-b-2
              border-light dark:border-gray-300
              rotate-45
            '
          />
        )}
      </div>
    </label>
  );
};

export default CheckBox;
