/* eslint-disable jsx-a11y/iframe-has-title */
import {
  HiStar, HiLocationMarker, HiOutlineWifi,
} from 'react-icons/hi';
import { BsWifi, BsTv, BsCup } from 'react-icons/bs';
import CardRoom from '../components/CardRoom';

export default function DetailPage() {
  return (
    <div className="continer">
      <section>
        <img src="https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" alt="" />
      </section>
      <section className="mx-3">
        <h2 className="mt-5 text-xl font-bold">Homestay Langit Senja</h2>
        <div className="flex my-1">
          <div className="inline-flex">
            <div className="inline-flex">
              <HiStar color="#FFC700" />
            </div>
            <p className="px-1 inline-flex text-xs"><i>4.3</i></p>
          </div>
          <div className="inline-flex px-5">
            <div className="inline-flex">
              <HiLocationMarker color="#FF3C3C" />
            </div>
            <p className="px-1 inline-flex text-xs"><i>Patak Banteng, Dieng</i></p>
          </div>
        </div>
        <p className="my-5 text-sm">
          Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh. Viverra venenatis duis massa aliquam. Elit tellus magna quam molestie. Aliquam mauris ipsum eget sit.Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh.
        </p>
      </section>
      <section className="mx-3">
        <h3 className="text-md font-bold">Fasilitas</h3>
        <div className="my-3 grid grid-cols-5 gap-3">
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsWifi size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Wifi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsTv size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Smart TV</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsWifi size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Wifi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsCup size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Teh & Kopi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <HiOutlineWifi size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Wifi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsWifi size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Wifi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsTv size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Smart TV</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsWifi size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Wifi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <BsCup size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Teh & Kopi</p>
          </div>
          <div className="my-2">
            <div className="flex justify-center p-1">
              <HiOutlineWifi size={25} color="#264C86" />
            </div>
            <p className="text-xs text-biru text-center">Wifi</p>
          </div>
        </div>
      </section>
      <section className="mx-3 my-5 mb-8">
        <h3 className="text-md font-bold">Lokasi</h3>
        <iframe className="my-4 w-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.064625276419!2d109.90771869678953!3d-7.233469599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700da120c1333d%3A0xbfaa9d1832340de9!2sVila%20tugu%20langit!5e0!3m2!1sid!2sid!4v1668151351280!5m2!1sid!2sid" />
      </section>
      <section className="mx-3 my-5 mb-8">
        <h3 className="text-md font-bold my-2">Destinasi Sekitar</h3>
        <div className="flex justify-between my-3">
          <div>
            <p className="text-md">Telaga Warna</p>
            <p className="text-abu2 text-xs">Sekitar 9 menit perjalanan</p>
          </div>
          <div className="p-2">
            <p><a className="bg-biru text-xs font-extralight px-9 py-0.5 rounded-md text-putih" href="https://maps.app.goo.gl/J339rb55jAFCWk4Y7">Lihat</a></p>
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div>
            <p>Telaga Warna</p>
            <p className="text-abu2 text-xs">Sekitar 9 menit perjalanan</p>
          </div>
          <div className="p-2">
            <p><a className="bg-biru text-xs font-extralight px-9 py-0.5 rounded-md text-putih" href="hhttps://maps.app.goo.gl/J339rb55jAFCWk4Y7">Lihat</a></p>
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div>
            <p>Telaga Warna</p>
            <p className="text-abu2 text-xs">Sekitar 9 menit perjalanan</p>
          </div>
          <div className="p-2">
            <p><a className="bg-biru text-xs font-extralight px-9 py-0.5 rounded-md text-putih" href="https://maps.app.goo.gl/J339rb55jAFCWk4Y7">Lihat</a></p>
          </div>
        </div>
      </section>
      <section className="mx-3 my-5">
        <h3 className="text-md font-bold my-5">Pilih Kamar Anda</h3>
        <div className="flex snap-x overflow-x-auto">
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
        </div>
      </section>
      <section>
        <h3 className="text-md font-bold my-5">Review</h3>
      </section>
    </div>
  );
}
