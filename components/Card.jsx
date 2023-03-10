import Link from 'next/link';
import { HiStar } from 'react-icons/hi';

export default function Card() {
  return (
    <Link href="DetailPage">
      <div className="mx-auto flex w-full lg:w-full lg:h-fit cursor-pointer rounded-md p-3 shadow-md transition-all hover:shadow-lg">
        <div className="w-4/12 rounded-md bg-[url('https://source.unsplash.com/random/400×300/?house')] bg-cover bg-center" />
        <div className="m-auto w-6/12 lg:w-7/12 p-3">
          <h2 className="text-md font-medium leading-6">Tugu langit sikunir</h2>
          <p className="text-xs font-thin leading-6 text-abu2">Homestay</p>
          <p className="hidden lg:block text-abu2 text-sm font-light leading-6">Lorem ipsum elit. Quas, ducimus voluptatibus nesciunt sit</p>
          <div>
            <p className="text-base font-bold leading-6 text-biru">
              Rp 350K/
              <span className="text-xs font-extralight text-abu2">malam</span>
            </p>
            <p className="text-xs">
              <span className="mr-[2px] rounded-sm bg-kuning px-[3px] py-[2px] font-semibold text-abu2">
                10%
              </span>
              <span className="text-abu2 line-through">400K/malam</span>
            </p>
          </div>
        </div>
        <div className="my-auto w-2/12 lg:w-1/12 justify-between">
          <div className="my-auto flex">
            <HiStar className="my-auto text-kuning" />
            <p className="my-auto text-sm"> 4.5</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
