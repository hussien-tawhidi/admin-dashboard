import Mobile from "./header/mobile/Mobile";
import LgSideBar from "./lg-side-bar/LgSideBar";

export default function SideBar() {
  return (
    <div className='shadow-lg w-full z-50'>
      {/* Large Screen Sidebar */}
      <div className='lg:block hidden w-60 bg-pink-500'>
        <LgSideBar />
      </div>
      {/* Mobile Sidebar */}
      <div className='lg:hidden block w-full'>
        <Mobile />
      </div>
    </div>
  );
}
