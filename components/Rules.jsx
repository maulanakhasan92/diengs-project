import { HiOutlineKey, HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Rules() {
  return (
    <section className="mx-3">
      <h3 className="text-md font-bold pb-4 pt-8">Ketentuan</h3>
      <div className="flex gap-4 justify-between px-8 py-4 border border-abu2 rounded-md">
        <div className="text-center">
          <p className="font-sm">Check-in</p>
          <p className="text-xs font-light text-abu2">Mulai 14.00 WIB</p>
        </div>
        <div className="py-2">
          <HiOutlineKey size={25} />
        </div>
        <div className="text-center">
          <p className="font-sm">Check-out</p>
          <p className="text-xs font-light text-abu2">Sebelum 12.00 WIB</p>
        </div>
      </div>
      <div className="flex mt-4 px-1">
        <div className="pt-1">
          <HiOutlineExclamationCircle size={20} />
        </div>
        <p className="text-sm ml-3">Dilarang membawa dan mengonsumsi obat-obatan terlarang di dalam Homestay.</p>
      </div>
      <div className="flex mt-4 px-1">
        <div className="pt-1">
          <HiOutlineExclamationCircle size={20} />
        </div>
        <p className="text-sm ml-2">Dilarang membawa dan mengonsumsi obat-obatan terlarang di dalam Homestay.</p>
      </div>
    </section>
  );
}
