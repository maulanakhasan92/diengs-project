import { FcGoogle } from 'react-icons/fc';

export default function LoginGoogle() {
  return (
    <button
      type="button"
      className="flex w-full justify-center rounded-md bg-abu p-2 text-sm transition-all hover:shadow-sm hover:shadow-abu">
      <FcGoogle size={24} />
      <span className="my-auto ml-2 ">Lanjutkan Dengan Google</span>
    </button>
  );
}
