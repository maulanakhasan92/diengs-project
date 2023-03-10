/* eslint-disable jsx-a11y/iframe-has-title */
import {
  HiStar, HiLocationMarker, HiOutlineBookmark,
} from 'react-icons/hi';
import Navigation from '../components/Navigation';
import HotelImageHeader from '../components/HotelImageHeader';
import Facility from '../components/Facility';
import Destination from '../components/Destination';
import RoomList from '../components/RoomList';
import ReviewList from '../components/ReviewList';
import SelectRoomNav from '../components/SelectRoomNav';
import ImageCard from '../components/ImageCard';
import TopNav from '../components/TopNav';
import Rules from '../components/Rules';

export default function DetailPage() {
  return (
    <div>
      <div className="hidden lg:block">
        <TopNav />
      </div>
      <div className="contine lg:max-w-6xl mx-auto">
        <Navigation />
        <ImageCard />
        <HotelImageHeader />
        <section className="mx-3 pb-6">
          <div className="mt-5 flex justify-between">
            <h2 className="text-xl lg:text-3xl font-bold">Homestay Langit Senja</h2>
            <div className="hidden lg:flex border-0 px-6 py-2 rounded-lg bg-kuning">
              <div className="pacity-90 pt-0.5 mr-1">
                <HiOutlineBookmark size={20} color="#FFFFFF" />
              </div>
              <p className="text-base text-putih font-semibold">Favorit</p>
            </div>
          </div>
          <div className="flex my-1">
            <div className="inline-flex">
              <div className="inline-flex lg:pt-0.5">
                <HiStar color="#FFC700" size={18} />
              </div>
              <p className="px-1 inline-flex text-xs lg:text-base">4.3</p>
            </div>
            <div className="inline-flex px-5">
              <div className="inline-flex lg:pt-0.5">
                <HiLocationMarker color="#FF3C3C" size={18} />
              </div>
              <p className="px-1 inline-flex text-xs lg:text-base">Patak Banteng, Dieng</p>
            </div>
          </div>
          <p className="my-5 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh. Viverra venenatis duis massa aliquam. Elit tellus magna quam molestie. Aliquam mauris ipsum eget sit.Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh.
          </p>
        </section>
        <SelectRoomNav />
        <Facility />
        <section className="px-3 py-5 pt-8">
          <h3 className="text-md mb-4 font-bold lg:text-xl">Lokasi</h3>
          <iframe className="w-full rounded-lg lg:h-56" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.064625276419!2d109.90771869678953!3d-7.233469599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700da120c1333d%3A0xbfaa9d1832340de9!2sVila%20tugu%20langit!5e0!3m2!1sid!2sid!4v1668151351280!5m2!1sid!2sid" />
        </section>
        <Destination />
        <Rules />
        <RoomList />
        <ReviewList />
      </div>
    </div>
  );
}
