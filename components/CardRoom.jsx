import { BsWifi, BsTv } from 'react-icons/bs';

export default function CardRoom() {
  return (
    <div className="min-w-[80%] mb-2 mr-2 w-64 p-3 rounded-lg shadow-md snap-center">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <p className="font-semibold mt-2">Bintang Standart Room</p>
      <p className="text-xs font-normal">2 bed • max 4 tamu per kamar</p>
      <div className="grid grid-cols-4 pr-5 mt-1">
        <div className="flex flex-row my-1">
          <div className="justify-center px-1">
            <BsWifi size={15} color="#264C86" />
          </div>
          <p className="text-xs font-light text-biru text-center pl-1">Wifi</p>
        </div>
        <div className="flex flex-row my-1">
          <div className="justify-center px-1">
            <BsTv size={15} color="#264C86" />
          </div>
          <p className="text-xs font-light text-biru text-center px-1">TV</p>
        </div>
        <div className="flex flex-row my-1">
          <div className="justify-center px-1">
            <BsWifi size={15} color="#264C86" />
          </div>
          <p className="text-xs font-light text-biru text-center px-1">Kopi</p>
        </div>
        <div className="flex flex-row my-1">
          <div className="justify-center px-1">
            <BsWifi size={15} color="#264C86" />
          </div>
          <p className="text-xs font-light text-biru text-center px-1">Wifi</p>
        </div>
      </div>
      <p className="text-xs font-light text-biru text-left underline px-1 mb-1">Semua fasilitas..</p>
      <div className="flex">
        <p className="font-bold text-biru">Rp. 350.000</p>
        <p className="text-sm pt-0.5">/malam</p>
      </div>
      <div className="bg-biru mt-1 p-2 rounded-lg">
        <p className="text-center text-putih text-xs font-medium">Ajukan Sewa</p>
      </div>
    </div>
  );
}
