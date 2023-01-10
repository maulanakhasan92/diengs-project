import Link from 'next/link';
import LoginGoogle from '../components/LoginGoogle';

export default function Register() {
  return (
    <section className="container m-auto w-96 mt-10 rounded-md p-6">
      <img src="./signUp.svg" alt="ilustrasi login" className="mb-8 w-[150px] mx-auto" />
      <h2 className="text-center text-md font-bold text-biru mb-8">Daftar</h2>
      <form action="">
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="text" placeholder="Nama" />
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="Email" name="" id="email" placeholder="Email" />
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="password" name="" id="email" placeholder="Password" />
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="password" name="" id="email" placeholder="Konfirmasi Password" />
        <button className="w-full p-2 bg-biru rounded-md mb-3 text-abu hover:shadow-sm hover:shadow-biru transition-all" type="submit">Daftar</button>
      </form>
      <p className="text-center text-sm mb-3">atau</p>
      <LoginGoogle />
      <p className="mt-8 text-sm text-center">
        Sudah punya akun?
        <Link href="/login">
          <span className="text-biru hover:text-hitam"> Masuk</span>
        </Link>
      </p>
    </section>
  );
}
