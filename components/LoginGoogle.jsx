import { FcGoogle } from 'react-icons/fc';

export default function LoginGoogle() {
  return (
    <button type="button" className="text-sm p-2 bg-abu rounded-md w-full flex justify-center hover:shadow-sm hover:shadow-abu transition-all">
      <FcGoogle size={24} />
      <span className="ml-2 my-auto ">Lanjutkan Dengan Google</span>
    </button>
  );
}
