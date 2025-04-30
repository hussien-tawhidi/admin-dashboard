import Image from "next/image";

interface CountryData {
  name: string;
  flag: string; // ISO code, like 'AF'
  value: number;
  color: string;
}

const countries: CountryData[] = [
  { name: "ایران", flag: "IR", value: 800, color: "bg-light" },
  { name: "افغانستان", flag: "AF", value: 659, color: "bg-pink" },
  { name: "چین", flag: "CN", value: 355, color: "bg-light" },
  { name: "کانادا", flag: "CA", value: 204, color: "bg-pink" },
];

export default function CountryPerformance() {
  const max = Math.max(...countries.map((c) => c.value));

  return (
    <div className='space-y-4 w-full'>
      {countries.map((c) => (
        <div key={c.name} className='flex items-center justify-between'>
          <div className='flex items-center gap-2 w-[140px]'>
            {/* 🌍 Country flag as SVG */}
            <Image
              width={100}
              height={100}
              src={`https://flagcdn.com/w40/${c.flag.toLowerCase()}.png`}
              alt={c.name}
              className='w-6 h-auto object-cover rounded-sm border'
            />
            <span className='text-sm font-medium'>{c.name}</span>
          </div>

          <div className='flex-1 mx-3 h-2 bg-lighter dark:bg-dark rounded'>
            <div
              className={`h-full ${c.color} rounded`}
              style={{ width: `${(c.value / max) * 100}%` }}
            />
          </div>
          <span className='text-sm font-semibold text-dark'>{c.value}k</span>
        </div>
      ))}
    </div>
  );
}
