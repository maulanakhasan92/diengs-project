import CardRoom from './CardRoom';

export default function RoomList() {
  return (
    <section id="kamar" className=" bg-putih px-3 py-2 pt-8">
      <h3 className="text-md font-bold py-5">Pilih Kamar Anda</h3>
      <div className="flex snap-x overflow-x-auto no-scrollbar">
        <CardRoom />
        <CardRoom />
        <CardRoom />
        <CardRoom />
      </div>
    </section>
  );
}
