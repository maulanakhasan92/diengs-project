import { BsWifi, BsTv } from 'react-icons/bs';

export default function CardRoom() {
  return (
    <div className="mb-2 mr-2 w-64 min-w-[25%] snap-center rounded-lg p-3 shadow-md">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
        <img
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <p className="mt-2 font-semibold">Bintang Standart Room</p>
      <p className="text-xs font-normal">2 bed • max 4 tamu per kamar</p>
      <div className="my-1 grid grid-cols-4 pr-5">
        <div className="my-1 flex flex-row">
          <div className="justify-center px-1">
            <BsWifi size={15} color="#264C86" />
          </div>
          <p className="pl-1 text-center text-xs font-light text-biru">Wifi</p>
        </div>
        <div className="my-1 flex flex-row">
          <div className="justify-center px-1">
            <BsTv size={15} color="#264C86" />
          </div>
          <p className="px-1 text-center text-xs font-light text-biru">TV</p>
        </div>
        <div className="my-1 flex flex-row">
          <div className="justify-center px-1">
            <BsWifi size={15} color="#264C86" />
          </div>
          <p className="px-1 text-center text-xs font-light text-biru">Kopi</p>
        </div>
        <div className="my-1 flex flex-row">
          <div className="justify-center px-1">
            <BsWifi size={15} color="#264C86" />
          </div>
          <p className="px-1 text-center text-xs font-light text-biru">Wifi</p>
        </div>
        <p className="px-1 text-center text-xs font-light text-biru">Semua fasilitas..</p>
      </div>
      <div>
        <p>
          Rp. 350.000
          <i>/malam</i>
        </p>
      </div>
      <div className="mt-1 rounded-lg bg-biru p-1.5">
        <p className="text-center text-xs font-medium text-putih">Ajukan Sewa</p>
      </div>
    </div>
  );
}
