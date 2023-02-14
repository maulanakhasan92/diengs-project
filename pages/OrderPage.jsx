import { BsFillMoonStarsFill } from 'react-icons/bs';
import Header from '../components/Header';

export default function OrderPage() {
  return (
    <div className="lg:max-w-6xl mx-auto">
      <Header />
      <div className="px-4 bg-putih">
        <h3 className="text-lg font-semibold mt-2 mb-4">Detail Pemesanan</h3>
        <div className="my-8 flex">
          <div className="w-16 h-16 lg:w-40 lg:h-40 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
          <div className="ml-4 pt-2">
            <p className="text-md font-bold">Homestay Langit Senja</p>
            <p className="text-sm font-medium text-abu2">Patak Banteng, Dieng, Kab Wonosobo</p>
          </div>
        </div>
        <div className="flex justify-between py-4 border-b-[1px] border-abu2 border-dashed">
          <div>
            <p className="text-base font-bold">Check-in</p>
            <p className="text-sm">Sel, 31 Jan 2023</p>
            <p className="text-xs text-abu2">Mulai pukul 14.00 WIB</p>
          </div>
          <div className="flex py-4">
            <div className="mt-1">
              <BsFillMoonStarsFill size={25} />
            </div>
            <p className="font-semibold text-xl ml-2">4</p>
          </div>
          <div className="text-right">
            <p className="text-base font-bold">Check-out</p>
            <p className="text-sm">Sel, 31 Jan 2023</p>
            <p className="text-xs text-abu2">Mulai pukul 14.00 WIB</p>
          </div>
        </div>
        <div className="py-4 border-b-[1px] border-abu2 border-dashed">
          <p className="text-base font-bold">ID Pemesanan</p>
          <p className="text-sm">HJ890OK32</p>
        </div>
        <div className="py-4 border-b-[1px] border-abu2 border-dashed">
          <p className="text-base font-bold">Dipesan Untuk</p>
          <p className="text-sm">Muhammad Bahrul Ulum</p>
        </div>
        <div className="py-4 border-b-[1px] border-abu2 border-dashed">
          <p className="text-base font-bold">Tipe Kamar</p>
          <p className="text-sm">Kamar Bintang</p>
        </div>
        <div className="py-4 border-b-[1px] border-abu2 border-dashed">
          <p className="text-base font-bold">Tamu</p>
          <p className="text-sm">2 Dewasa, 1 Anak-anak</p>
        </div>
        <div className="py-4 border-b-[1px] border-abu2 border-dashed">
          <p className="text-base font-bold">Catatan Pemesan</p>
          <p className="text-sm">Tidak ada</p>
        </div>
      </div>
    </div>
  );
}
