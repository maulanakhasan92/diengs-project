import {
  HiHome,
  HiOutlineBookmark,
  HiOutlineCalendar,
  HiOutlineBell,
  HiOutlineUser,
} from 'react-icons/hi';

export default function TopNav() {
  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-biru to-biru2 p-3 z-20">
      <div className="mx-auto flex max-w-6xl justify-between">
        <h1 className="my-auto w-1/4 text-xl font-semibold text-putih px-3">Diengs.id</h1>
        <input
          className="my-auto h-10 w-1/2 rounded-full bg-putih p-1 text-center text-sm text-biru drop-shadow-md backdrop-blur-lg"
          type="text"
          placeholder="🔍 Cari"
        />
        <div className="w-1/4 justify-between py-3 pl-[5%] lg:flex lg:block hidden">
          <div className="mx-2 text-center">
            <div className="flex justify-center">
              <HiHome size={22} className="text-putih" />
            </div>
          </div>
          <div className="mx-2 text-center ">
            <div className="flex justify-center">
              <HiOutlineBookmark size={22} className="text-putih" />
            </div>
          </div>
          <div className="mx-2 text-center">
            <div className="flex justify-center">
              <HiOutlineCalendar size={22} className="text-putih" />
            </div>
          </div>
          <div className="mx-2 text-center">
            <div className="flex justify-center">
              <HiOutlineBell size={22} className="text-putih" />
            </div>
          </div>
          <div className="mx-2 text-center">
            <div className="flex justify-center">
              <HiOutlineUser size={22} className="text-putih" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
