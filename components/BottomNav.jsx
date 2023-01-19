import {
  HiHome,
  HiOutlineBookmark,
  HiOutlineCalendar,
  HiOutlineBell,
  HiOutlineUser,
} from 'react-icons/hi';

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 flex w-full justify-between bg-putih p-3 lg:hidden">
      <div className="text-center">
        <div className="flex justify-center">
          <HiHome size={22} color="#264C86" />
        </div>
        <p className="text-xs text-biru">Beranda</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <HiOutlineBookmark size={22} />
        </div>
        <p className="text-xs">Favorit</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <HiOutlineCalendar size={22} />
        </div>
        <p className="text-xs">Pesanan</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <HiOutlineBell size={22} />
        </div>
        <p className="text-xs">Notifikasi</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <HiOutlineUser size={22} />
        </div>
        <p className="text-xs">Profile</p>
      </div>
    </nav>
  );
}
