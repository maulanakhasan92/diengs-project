import Link from 'next/link';
import { BsArrowLeftShort, BsBoxArrowUp, BsBookmark } from 'react-icons/bs';

export default function Navigation() {
  return (
    <div>
      <div className="fixed z-30 top-0 right-0 left-0 flex justify-between m-4">
        <Link href="HomePage">
          <div className="bg-putih p-0.5 rounded-full opacity-90">
            <BsArrowLeftShort size={29} />
          </div>
        </Link>
        <div className="flex">
          <div className="bg-putih p-2 rounded-full mx-2 opacity-90">
            <BsBookmark size={17} />
          </div>
          <div className="bg-putih p-2 rounded-full opacity-90">
            <BsBoxArrowUp size={17} />
          </div>
        </div>
      </div>
      <div className="fixed z-20 top-0 left-0 right-0 p-4 bg-putih">
        <p className="text-left font-medium pt-1 pl-12">Homstay Langit Senja</p>
      </div>
    </div>
  );
}
