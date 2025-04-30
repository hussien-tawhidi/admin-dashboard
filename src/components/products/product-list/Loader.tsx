"use client"
export default function Loader() {
  return (
    <div className='w-full h-[30vh] flex items-center justify-center flex-col'>
      <div className='relative w-[42px] h-[42px] filter-jelly-triangle'>
        <div className='absolute top-[6%] left-[30%] w-[33%] h-[33%] bg-[#64748b] rounded-full animate-grow0'></div>

        <div className='absolute top-[6%] left-[30%] w-[33%] h-[33%] bg-[#64748b] rounded-full animate-triangulate'></div>
      </div>

      <svg width='0' height='0' className='hidden'>
        <defs>
          <filter id='uib-jelly-triangle-ooze'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='7.3'
              result='blur'></feGaussianBlur>
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='ooze'></feColorMatrix>
            <feBlend in='SourceGraphic' in2='ooze'></feBlend>
          </filter>
        </defs>
      </svg>
      <p>در حال برقراری ارتباط با سرور...</p>
    </div>
  );
}
