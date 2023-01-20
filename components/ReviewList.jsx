import { HiStar } from 'react-icons/hi';
import Review from './Review';

export default function ReviewList() {
  return (
    <section className="relative z-10 bg-putih px-3 pt-8">
      <div className="flex justify-between my-4">
        <h3 className="text-md font-bold">Ulasan</h3>
        <p className="text-xs font-medium text-biru">Lihat Semua</p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <HiStar color="#FFC700" size={30} />
          <p className="text-lg font-bold mx-1 pt-0.5">4.3</p>
          <p className="text-xs font-normal text-abu2 py-2">(20 Ulasan)</p>
        </div>
        <p className="bg-abu rounded-md my-1 p-1 px-3 font-normal text-xs">Sangat Bagus</p>
      </div>
      <div className="my-4 divide-y divide-abu">
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
}
