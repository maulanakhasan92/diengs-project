/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '../components/Card';
import TopNav from '../components/TopNav';
import Promo from '../components/Promo';
// import Kategori from '../components/Kategori';
import BottomNav from '../components/BottomNav';

export default function HomePage() {
  return (
    <>
      <TopNav />
      <section id="hero" className="p-5 md:hidden bg-gradient-to-r from-biru to-biru2 flex justify-between">
        <h2 className="text-putih text-lg font-medium m-auto">
          Sedang mencari
          <br />
          penginapan di Dieng?
          <br />
          <span className="text-kuning">Tekuman disini..</span>
        </h2>
        <img className="m-auto" src="./icon.svg" alt="" />
      </section>
      <section className="bg-gradient-to-r from-biru to-biru2">
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar mr-3 bg-putih rounded-t-lg w-full">
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </div>
      </section>
      <section className="mx-auto flex justify-between max-w-6xl px-3">
        <h3 className="text-xl my-auto font-semibold mb-3">Populer</h3>
        <a className="text-biru text-sm my-auto font-medium" href="#">Lihat semua</a>
      </section>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 max-w-6xl ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <BottomNav />
    </>
  );
}
