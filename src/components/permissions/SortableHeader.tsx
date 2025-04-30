import { BsChevronUp, BsChevronDown } from "react-icons/bs";

type SortableHeaderProps = {
  label: string;
  sortKey: string;
  currentSort: { key: string; direction: "asc" | "desc" };
  onSort: (key: string) => void;
};

export default function SortableHeader({
  label,
  sortKey,
  currentSort,
  onSort,
}: SortableHeaderProps) {
  const isActive = currentSort.key === sortKey;

  return (
    <th
      className='p-4 cursor-pointer select-none whitespace-nowrap'
      onClick={() => onSort(sortKey)}>
      <div className='flex items-center gap-1'>
        {label}
        {isActive &&
          (currentSort.direction === "asc" ? (
            <BsChevronUp className='w-3 h-3' />
          ) : (
            <BsChevronDown className='w-3 h-3' />
          ))}
      </div>
    </th>
  );
}
