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
      <section id="hero" className="mb-3 p-5 bg-gradient-to-r from-biru to-biru2 flex justify-between">
        <h2 className="text-putih text-lg font-medium m-auto">
          Sedang mencari
          penginapan di Dieng?
          <span className="text-kuning">Tekuman disini..</span>
        </h2>
        <img className="m-auto" src="./icon.svg" alt="" />
      </section>
      <Promo />
      <section className="mx-3 flex justify-between">
        <h3 className="text-xl my-auto">Populer</h3>
        <a className="text-biru text-sm my-auto" href="#">Lihat semua</a>
      </section>
      <div className="grid grid-cols-2 gap-2">
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
