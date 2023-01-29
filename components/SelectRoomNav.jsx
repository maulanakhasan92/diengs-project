export default function SelectRoomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 pb-5 bg-putih flex justify-between lg:max-w-6xl mx-auto">
      <div className="grow">
        <p className="text-xs text-abu2">Harga Mulai</p>
        <div className="flex">
          <p className="font-bold text-biru">Rp. 350.000</p>
          <p className="text-sm pt-0.5">/malam</p>
        </div>
      </div>
      <a href="#kamar" className="bg-biru rounded-lg my-0 py-2.5 px-7">
        <p className="text-putih text-sm">Pilih Kamar</p>
      </a>
    </div>
  );
}
