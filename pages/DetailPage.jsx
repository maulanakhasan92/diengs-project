/* eslint-disable jsx-a11y/iframe-has-title */
import {
  HiStar, HiLocationMarker,
} from 'react-icons/hi';
import Navigation from '../components/Navigation';
import Facility from '../components/Facility';
import Destination from '../components/Destination';
import RoomList from '../components/RoomList';
import ReviewList from '../components/ReviewList';
import SelectRoomNav from '../components/SelectRoomNav';
import ImageCard from '../components/ImageCard';
import TopNav from '../components/TopNav';
import Rules from '../components/Rules';

export default function DetailPage() {
  const seeImage = () => {
    document.querySelector('#imageCard').classList.remove('hidden');
  };
  return (
    <div>
      <div className="hidden lg:block">
        <TopNav />
      </div>
      <div className="contine lg:max-w-6xl mx-auto">
        <Navigation />
        <ImageCard />
        <section className="relative z-20">
          <div onClick={seeImage} className="h-80 lg:h-96 w-full bg-[url('https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')] bg-cover cursor-pointer" />
          <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-2 pt-5 bg-gradient-to-t from-putih to-transparent">
            <div onClick={seeImage} className="w-20 h-14 lg:w-40 lg:h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover cursor-pointer" />
            <div onClick={seeImage} className="w-20 h-14 lg:w-40 lg:h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')] bg-cover cursor-pointer" />
            <div onClick={seeImage} className="w-20 h-14 lg:w-40 lg:h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover cursor-pointer" />
          </div>
        </section>
        <section className="mx-3 pb-6">
          <h2 className="mt-5 text-xl font-bold">Homestay Langit Senja</h2>
          <div className="flex my-1">
            <div className="inline-flex">
              <div className="inline-flex">
                <HiStar color="#FFC700" />
              </div>
              <p className="px-1 inline-flex text-xs">4.3</p>
            </div>
            <div className="inline-flex px-5">
              <div className="inline-flex">
                <HiLocationMarker color="#FF3C3C" />
              </div>
              <p className="px-1 inline-flex text-xs">Patak Banteng, Dieng</p>
            </div>
          </div>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh. Viverra venenatis duis massa aliquam. Elit tellus magna quam molestie. Aliquam mauris ipsum eget sit.Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh.
          </p>
        </section>
        <SelectRoomNav />
        <Facility />
        <section className="px-3 py-5 pt-8">
          <h3 className="text-md mb-4 font-bold">Lokasi</h3>
          <iframe className="w-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.064625276419!2d109.90771869678953!3d-7.233469599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700da120c1333d%3A0xbfaa9d1832340de9!2sVila%20tugu%20langit!5e0!3m2!1sid!2sid!4v1668151351280!5m2!1sid!2sid" />
        </section>
        <Destination />
        <Rules />
        <RoomList />
        <ReviewList />
      </div>
    </div>
  );
}
