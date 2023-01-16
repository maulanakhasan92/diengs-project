export default function TopNav() {
  return (
    <nav className="p-3 bg-gradient-to-r from-biru to-biru2 flex justify-between sticky top-0 w-full">
      <h1 className="text-putih text-xl font-semibold my-auto">Diengs.id</h1>
      <input className="w-28 p-1 text-center my-auto rounded-full text-sm bg-putih bg-opacity-80 backdrop-blur-lg drop-shadow-md text-biru" type="text" placeholder="🔍 Cari" />
    </nav>
  );
}
