import Header from '../components/Header';
import DatePicker from '../components/DatePicker';
import NumberOfGuest from '../components/NumberOfGuest';

export default function ApplyForRentPage() {
  return (
    <div className="lg:max-w-6xl mx-auto">
      <Header />
      <div className="px-4 bg-putih">
        <h3 className="text-lg font-semibold mt-2">Input Detail Pemesanan</h3>
        <DatePicker />
        <div>
          <p className="text-sm font-bold mt-8 mb-2">Jumlah Tamu</p>
          <form className="p-4 rounded-md shadow-md">
            <div className="mb-2 flex">
              <div className="grow">
                <p className="text-sm font-medium">Dewasa</p>
                <p className="text-xs text-abu2 font-light">Diatas 12 Tahun</p>
              </div>
              <NumberOfGuest />
            </div>
            <div className="mt-2 flex">
              <div className="grow">
                <p className="text-sm font-medium">Anak-anak</p>
                <p className="text-xs text-abu2 font-light">Dibawah 12 Tahun</p>
              </div>
              <NumberOfGuest />
            </div>
          </form>
        </div>
        <div>
          <p className="text-sm font-bold mt-8 mb-2">Catatan</p>
          <form className="p-4 rounded-md shadow-md">
            <input className="w-full border-b-[1.5px]" type="text" name="" id="note" placeholder="" />
          </form>
        </div>
      </div>
      <div className="p-3 pb-4 mt-8 bg-putih flex justify-between lg:max-w-6xl mx-auto">
        <div className="grow">
          <p className="text-xs text-abu2">Total Harga</p>
          <p className="font-bold text-biru">Rp. 700.000</p>
        </div>
        <a href="#kamar" className="bg-biru rounded-lg my-0 py-2.5 px-10">
          <p className="text-putih text-sm">Ajukan Sewa</p>
        </a>
      </div>
    </div>
  );
}
