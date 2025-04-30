import Header from "../header/Header";
import Menu from "./Menu";

export default function LgSideBar() {
  return (
    <div className='py-3 flex px-4 w-full'>
      <div className='bg-lighter lg:w-[15.6vw] dark:bg-dark'>
        <Menu />
      </div>
      <div className='fixed top-0 left-0 lg:w-screen  w-[84.4vw]'>
        <Header />
      </div>
    </div>
  );
}
