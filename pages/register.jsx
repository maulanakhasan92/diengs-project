import Link from 'next/link';
import LoginGoogle from '../components/LoginGoogle';

export default function Register() {
  return (
    <section className="container m-auto mt-10 w-96 rounded-md p-6">
      <img src="./signUp.svg" alt="ilustrasi login" className="mx-auto mb-8 w-[150px]" />
      <h2 className="text-md mb-8 text-center font-bold text-biru">Daftar</h2>
      <form action="">
        <input
          className="mb-3 w-full rounded-md p-2 text-sm ring-1 ring-abu"
          type="text"
          placeholder="Nama"
        />
        <input
          className="mb-3 w-full rounded-md p-2 text-sm ring-1 ring-abu"
          type="Email"
          name=""
          id="email"
          placeholder="Email"
        />
        <input
          className="mb-3 w-full rounded-md p-2 text-sm ring-1 ring-abu"
          type="password"
          name=""
          id="email"
          placeholder="Password"
        />
        <input
          className="mb-3 w-full rounded-md p-2 text-sm ring-1 ring-abu"
          type="password"
          name=""
          id="email"
          placeholder="Konfirmasi Password"
        />
        <button
          className="mb-3 w-full rounded-md bg-biru p-2 text-putih transition-all hover:shadow-sm hover:shadow-biru"
          type="submit">
          Daftar
        </button>
      </form>
      <p className="mb-3 text-center text-sm">atau</p>
      <LoginGoogle />
      <p className="mt-8 text-center text-sm">
        Sudah punya akun?
        <Link href="/login">
          <span className="text-biru hover:text-hitam"> Masuk</span>
        </Link>
      </p>
    </section>
  );
}
