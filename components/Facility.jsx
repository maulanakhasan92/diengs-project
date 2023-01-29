import { BsWifi, BsTv, BsCup } from 'react-icons/bs';

export default function Facility() {
  return (
    <section className="mx-3">
      <h3 className="text-md font-bold">Fasilitas</h3>
      <div className="my-3 grid grid-cols-5 lg:grid-cols-6 gap-3">
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Wifi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsTv size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Smart TV</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Wifi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsCup size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Teh & Kopi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Wifi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Wifi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsTv size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Smart TV</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Wifi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsCup size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Teh & Kopi</p>
        </div>
        <div className="lg:flex my-2">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#264C86" />
          </div>
          <p className="text-xs text-biru text-center lg:text-sm lg:p-2">Wifi</p>
        </div>
      </div>
    </section>
  );
}
