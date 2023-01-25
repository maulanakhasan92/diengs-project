/* eslint-disable jsx-a11y/anchor-is-valid */
import Slider from 'react-slick';
import Card from '../components/Card';
import TopNav from '../components/TopNav';
import Promo from '../components/Promo';
// import Kategori from '../components/Kategori';
import BottomNav from '../components/BottomNav';
import ButtonCategory from '../components/ButtonCategory';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardRoom from '../components/CardRoom';

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrow: false,
    centerMode: true,
    centerPadding: '225px',
  };

  return (
    <>
      <TopNav />
      <section id="hero" className="p-5 bg-gradient-to-r from-biru to-biru2 flex justify-between lg:h-[50vh] lg:max-w-7xl lg:mx-auto lg:rounded-md lg:mt-3 lg:bg-[url('https://source.unsplash.com/random/1200×1000/?dieng')] bg-center bg-cover">
        <h2 className="text-putih text-lg lg:text-4xl lg:font-bold font-medium m-auto">
          Sedang mencari
          <br />
          penginapan di Dieng?
          <br />
          <span className="text-kuning">Tekuman disini..</span>
        </h2>
        <img className="m-auto lg:hidden left-auto" src="./icon.svg" alt="" />
      </section>
      {/* <div className="mb-4 relative z-0">
        <Slider {...settings}>
          <div>
            <Promo />
          </div>
          <div>
            <Promo />
          </div>
          <div>
            <Promo />
          </div>
        </Slider>
      </div> */}
      <section className="hidden md:block md:bg-putih max-w-[1250px] mx-auto p-3">
        <h3 className="text-xl font-semibold mt-3">
          Tawaran dan diskon
          <br />
          <span className="text-abu2 text-sm font-light">Temukan tawaran terbaik sebelum memesan penginapan!</span>
        </h3>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar max-w-7xl bg-putih rounded-t-lg mx-auto">
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </div>
      </section>
      <section className="mx-auto max-w-7xl p-3">
        <h3 className="text-xl font-semibold mt-3">
          Rekomendasi Kamar
          <br />
          <span className="text-abu2 text-sm font-light">Rekomendasi kamar terbaik untuk kamu singgahi!</span>
        </h3>
        <div className="flex gap-1 overflow-scroll no-scrollbar">
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
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
        <h3 className="text-xl my-auto font-semibold mb-3">
          Populer
          <br />
          <span className="text-abu2 text-sm font-light">Penginapan terpopuler bulan ini!</span>
        </h3>
        <a className="text-biru text-sm my-auto font-medium" href="#">Lihat semua</a>
      </section>
      <section className="px-3 mb-3 flex gap-2 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
      </section>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-7xl">
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
