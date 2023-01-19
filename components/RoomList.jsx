import CardRoom from './CardRoom';

export default function RoomList() {
  return (
    <section className="mx-3 my-5">
      <h3 className="text-md font-bold my-5">Pilih Kamar Anda</h3>
      <div className="flex snap-x overflow-x-auto no-scrollbar">
        <CardRoom />
        <CardRoom />
        <CardRoom />
        <CardRoom />
      </div>
    </section>
  );
}
