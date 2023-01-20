/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '../components/Card';
import TopNav from '../components/TopNav';
import Promo from '../components/Promo';
// import Kategori from '../components/Kategori';
import BottomNav from '../components/BottomNav';
import ButtonCategory from '../components/ButtonCategory';

export default function HomePage() {
  return (
    <>
      <TopNav />
      <section id="hero" className="p-5 bg-gradient-to-r from-biru to-biru2 flex justify-between md:hidden lg:hidden">
        <h2 className="text-putih text-lg font-medium m-auto">
          Sedang mencari
          <br />
          penginapan di Dieng?
          <br />
          <span className="text-kuning">Tekuman disini..</span>
        </h2>
        <img className="m-auto" src="./icon.svg" alt="" />
      </section>
      <section className="hidden md:block md:bg-putih max-w-[1250px] mx-auto">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar max-w-7xl bg-putih rounded-t-lg mx-auto">
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </div>
      </section>
      <section className="md:hidden bg-gradient-to-r from-biru to-biru2">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar max-w-7xl bg-putih rounded-t-lg mx-auto px-3">
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </div>
      </section>
      <section className="mx-auto flex justify-between max-w-7xl px-3">
        <h3 className="text-xl my-auto font-semibold mb-3">Populer</h3>
        <a className="text-biru text-sm my-auto font-medium" href="#">Lihat semua</a>
      </section>
      <section className="px-3 mb-3 flex gap-2 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
      </section>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 max-w-7xl ">
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
