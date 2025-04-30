
import MapChart from "./MapChart";
import CountryPerformance from "./CountryPerformance";

const tabs = ["همه", "1 ماه", "6 ماه", "یک سال"];

export default function PerformanceByCountry() {
  return (
    <div className='bg-lighter dark:bg-dark p-6 rounded-xl shadow-md w-full'>
      <div className='flex sm:flex-row flex-col items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold sm:mb-0 mb-3'>کار کرد بر اساسی مناطق</h2>
        <div className='flex gap-2'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className='px-3 py-1 text-sm bg-lighter whitespace-nowrap dark:bg-darker rounded'>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <MapChart />
        <CountryPerformance />
      </div>
    </div>
  );
}
