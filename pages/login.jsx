export default function Login() {
  return (
    <section className="container m-auto w-96 mt-10 shadow-md rounded-md p-6">
      <h2 className="text-center text-md font-bold text-biru mb-5">Diengs.id</h2>
      <form action="">
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="Email" name="" id="email" placeholder="email" />
        <input className="ring-1 ring-abu p-2 w-full rounded-md mb-3 text-sm" type="password" name="" id="email" placeholder="Password" />
        <button className="w-full p-2 bg-biru rounded-md mb-3 text-abu font-semibold" type="submit">Masuk</button>
      </form>
      <p className="text-center text-sm mb-3">atau</p>
      <button type="button" className="text-sm p-2 bg-abu rounded-md w-full">Lanjutkan dengan Google</button>
    </section>
  );
}
