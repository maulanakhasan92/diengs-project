export default function Card() {
  return (
    <div className="mx-auto w-48 cursor-pointer rounded-md p-3 transition-all hover:shadow-lg">
      <div className="mb-2  aspect-[4/3] rounded-md bg-[url('https://source.unsplash.com/random/400×300/?house')] bg-cover" />
      <h2 className="text-md font-semibold">Langit senja</h2>
      <p className="text-xs font-thin text-biru">Homestay</p>
      <p className="text-xs">Lorem ipsum, dolor sit amet</p>
      <p className="text-base font-bold">
        Rp 350.000/
        <span className="text-sm font-normal">malam</span>
      </p>
    </div>
  );
}
