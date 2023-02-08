import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';

export default function Header() {
  return (
    <div className=" bg-biru">
      <div className="flex p-4 bg-biru">
        <Link href="DetailPage">
          <div className="p-0.5 rounded-full opacity-90">
            <BsArrowLeftShort color="#FFFFFF" size={32} />
          </div>
        </Link>
        <div className="grow">
          <p className="text-putih text-md font-semibold text-center">Homestay Langit Senja</p>
          <p className="text-putih text-xs font-light text-center">Bintang Standart Room</p>
        </div>
        <div className="flex-none p-0.5 rounded-full opacity-90">
          <BsArrowLeftShort color="#264C86" size={32} />
        </div>
      </div>
      <div className="bg-putih h-4 rounded-t-lg" />
    </div>
  );
}
