import { HiStar } from 'react-icons/hi';

export default function Card() {
  return (
    <div className="mx-auto mb-2 w-96 cursor-pointer rounded-md p-3 transition-all hover:shadow-lg shadow-md flex">
      <div className="w-4/12 rounded-md bg-[url('https://source.unsplash.com/random/400×300/?house')] bg-cover" />
      <div className="w-6/12 m-auto p-3">
        <h2 className="text-md font-medium leading-6">Tugu langit sikunir</h2>
        <p className="text-xs font-thin text-abu2 leading-6">Homestay</p>
        <div>
          <p className="text-base font-bold text-biru leading-6">
            Rp 350K/
            <span className="font-extralight text-xs text-abu2">malam</span>
          </p>
          <p className="text-xs">
            <span className="bg-kuning rounded-sm px-[3px] py-[2px] mr-[2px] font-semibold text-abu2">10%</span>
            <strike className="text-abu2 opacity-60">400K/malam</strike>
          </p>
        </div>
      </div>
      <div className="w-2/12 my-auto justify-between">
        <div className="flex my-auto">
          <HiStar className="my-auto text-kuning" />
          <p className="my-auto text-sm"> 4.5</p>
        </div>
      </div>
    </div>
  );
}
