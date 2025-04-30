
import MiniLineChart from "./MiniLineChart";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  chartData: number[];
  color?: string;
}

const StatCard = ({ title, value, icon, chartData, color }: StatCardProps) => {
  return (
    <div className='bg-lighter dark:bg-dark p-4 rounded-xl shadow-md w-full'>
      <div className='flex items-center gap-3 mb-2'>
        <div className='bg-light text-lighter dark:text-light dark:bg-darker p-2 rounded-full'>{icon}</div>
        <div className='text-sm text-dark dark:text-light'>{title}</div>
      </div>
      <div className='text-2xl font-bold mb-2'>{value}</div>
      <div className='h-16'>
        <MiniLineChart data={chartData} color={color} />
      </div>
    </div>
  );
};

export default StatCard;
