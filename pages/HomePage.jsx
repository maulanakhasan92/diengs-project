/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '../components/Card';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import ButtonCategory from '../components/ButtonCategory';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardRoom from '../components/CardRoom';
import CardDestination from '../components/CardDestination';
import PromoFlowbite from '../components/PromoFlowbite';

export default function HomePage() {
  return (
    <>
      <TopNav />
      <section id="hero" className="p-5 bg-gradient-to-r from-biru to-biru2 flex justify-between lg:h-[50vh] lg:w-full lg:mx-auto lg:bg-[url('https://source.unsplash.com/random/1200×1000/?dieng')] bg-center bg-cover">
        <div className="m-auto w-full max-w-4xl hidden lg:block">
          <h1 className="text-putih hidden lg:block text-lg lg:text-4xl lg:font-bold font-medium mb-2">Diengs.id</h1>
          <h2 className="text-putih text-lg lg:text-xl font-medium mb-2">
            Sedang mencari penginapan di Dieng?
            <br />
            <span className="text-kuning">Temukan disini..</span>
          </h2>
          <input type="text" className="w-full rounded-lg h-12 mb-2 p-3 text-sm font-light shadow-lg" placeholder="🔍 cari hotel, villa atau kamar" />
          <p className="text-putih font-light text-sm">Populer: tugu langit, dieng cool</p>
        </div>
        <h2 className="text-putih text-lg lg:text-2xl lg:font-bold font-medium m-auto lg:hidden">
          Sedang mencari
          <br />
          penginapan di Dieng?
          <br />
          <span className="text-kuning">Temukan disini..</span>
        </h2>
        <img className="m-auto lg:hidden left-auto" src="./icon.svg" alt="" />
      </section>
      <section className=" md:bg-putih max-w-6xl mx-auto p-3">
        <h2 className="text-xl font-semibold mt-3">
          Tawaran dan diskon
          <br />
          <span className="text-abu2 text-sm font-light">Temukan tawaran terbaik sebelum memesan penginapan!</span>
        </h2>
        <PromoFlowbite />
      </section>
      <section className="mx-auto max-w-6xl p-3">
        <h2 className="text-xl font-semibold mt-3">
          Rekomendasi Kamar
          <br />
          <span className="text-abu2 text-sm font-light">Rekomendasi kamar terbaik untuk kamu singgahi!</span>
        </h2>
        <div className="flex gap-2 snap-x overflow-scroll no-scrollbar">
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
        </div>
      </section>
      {/* <section className="md:hidden bg-gradient-to-r from-biru to-biru2">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar max-w-6xl bg-putih rounded-t-lg mx-auto px-3">
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </div>
      </section> */}
      <section className="mt-6">
        <div className="mx-auto flex justify-between max-w-6xl px-3">
          <h2 className="text-xl my-auto font-semibold mb-3">
            Populer
            <br />
            <span className="text-abu2 text-sm font-light">Penginapan terpopuler bulan ini!</span>
          </h2>
          <a className="text-biru text-sm my-auto font-medium" href="#">Lihat semua</a>
        </div>
        <div className="px-3 mb-3 flex gap-3 overflow-x-auto no-scrollbar max-w-6xl mx-auto">
          <ButtonCategory />
          <ButtonCategory />
          <ButtonCategory />
          <ButtonCategory />
          <ButtonCategory />
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-6xl lg:mb-0 px-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="p-3 mx-auto max-w-6xl mt-6">
        <h2 className="text-xl my-auto font-semibold mb-3">
          Destinasi Wisata
          <br />
          <span className="text-abu2 text-sm font-light">Temuakan tempat menarik saat berwisata di kawasan Dieng!</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardDestination />
          <CardDestination />
          <CardDestination />
          <CardDestination />
          <CardDestination />
          <CardDestination />
          <CardDestination />
          <div className="flex hover:underline cursor-pointer shadow-lg group">
            <p className="m-auto justify-center group-hover:scale-125 transition-all duration-500">Lihat semua</p>
          </div>
        </div>
      </section>
      <section className="m-auto max-w-6xl p-3 flex flex-col lg:flex-row mt-6">
        <div className="lg:w-1/3 mx-auto flex">
          <img src="./travel.svg" alt="ilustrasi traveling" className="hidden lg:block w-[80%] m-auto" />
        </div>
        <div className="lg:w-2/3 mx-auto lg:p-3 mt-3 lg:mt-0">
          <h2 className="text-xl my-auto font-semibold mb-3">
            Wisata ke Dieng, cari penginapan jadi mudah!
          </h2>
          <h3 className="font-medium">Mudahnya Pesan dan booking Penginapan.</h3>
          <p className="font-light text-sm mb-3">Pesan sekaligus booking penginapan dengan mudah dan cepat. Tidak perlu risau, hanya dengan satu sentuhan jari, penginapan yang kamu butuhkan bisa dipesan dengan mudah</p>
          <h3 className="font-medium">Banyak Pilihan Penginapan Terbaik</h3>
          <p className="font-light text-sm mb-3">Ada banyak pilihan penginapan maupun kamar yang dapat kamu pilih. </p>
          <h3 className="font-medium">Banyak Pilihan Cara Pembayaran.</h3>
          <p className="font-light text-sm mb-3">Saat transaksi di Diengs.id, kamu bisa memilih cara pembayaran sesuai keinginan. Ada pilihan pembayaran via bank transfer, ATM transfer, Virtual Account (VA), kartu debit online, maupun kartu kredit. Bisa dicicil juga, lho. Prosesnya mudah dan simpel!</p>
        </div>
      </section>
      <section className="m-auto max-w-6xl p-3 mt-6">
        <div className="">
          <h2 className="text-xl my-auto font-semibold mb-3">
            Banjir diskon dan promo menarik!
          </h2>
          <h3 className="font-medium">Mudahnya Pesan dan booking Penginapan.</h3>
          <p className="font-light text-sm mb-3">Pesan sekaligus booking penginapan dengan mudah dan cepat. Tidak perlu risau, hanya dengan satu sentuhan jari, penginapan yang kamu butuhkan bisa dipesan dengan mudah</p>
          <h3 className="font-medium">Banyak Pilihan Penginapan Terbaik</h3>
          <p className="font-light text-sm mb-3">Ada banyak pilihan penginapan maupun kamar yang dapat kamu pilih. </p>
          <h3 className="font-medium">Banyak Pilihan Cara Pembayaran.</h3>
          <p className="font-light text-sm mb-3">Saat transaksi di Diengs.id, kamu bisa memilih cara pembayaran sesuai keinginan. Ada pilihan pembayaran via bank transfer, ATM transfer, Virtual Account (VA), kartu debit online, maupun kartu kredit. Bisa dicicil juga, lho. Prosesnya mudah dan simpel!</p>
        </div>
      </section>
      <footer className="w-full bg-abu mb-16 lg:mb-0 p-6">
        <div className="flex flex-col lg:flex-row text-center m-auto justify-between max-w-6xl">
          <h1 className="text-xl font-semibold">Diengs.id</h1>
          <p className="text-sm lg:hidden">CV Diengs Maju Uhuy</p>
          <p className="text-xs font-light">
            © 2023 CV Diengs Maju Uhuy
            <br />
            Hak cipta dilindungi Undang-undang.
          </p>
        </div>
      </footer>
      <BottomNav />
    </>
  );
}
