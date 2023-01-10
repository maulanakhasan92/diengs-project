import Link from 'next/link';
import LoginGoogle from '../components/LoginGoogle';

export default function Login() {
  return (
    <section className="container m-auto w-96 mt-10 rounded-md p-6">
      <img src="./signIn.svg" alt="ilustrasi login" className="mb-8 w-[200px] mx-auto" />
      <h2 className="text-center text-md font-bold text-biru mb-8">Masuk</h2>
      <form action="">
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="Email" name="" id="email" placeholder="Email" />
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="password" name="" id="email" placeholder="Password" />
        <button className="w-full p-2 bg-biru rounded-md mb-3 text-abu hover:shadow-sm hover:shadow-biru transition-all" type="submit">Masuk</button>
      </form>
      <p className="text-center text-sm mb-3">atau</p>
      <LoginGoogle />
      <p className="mt-8 text-sm text-center">
        Belum punya akun?
        <Link href="/register">
          <span className="text-biru hover:text-hitam"> Daftar</span>
        </Link>
      </p>
    </section>
  );
}
