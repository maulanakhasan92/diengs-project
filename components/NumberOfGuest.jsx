import { BsFillDashSquareFill, BsPlusSquareFill } from 'react-icons/bs';

export default function NumberOfGuest() {
  return (
    <div className="flex py-2.5">
      <div className="py-0.5">
        <BsFillDashSquareFill size={18} />
      </div>
      <p className="px-3 text-base"> 2 </p>
      <div className="py-0.5">
        <BsPlusSquareFill size={18} />
      </div>
    </div>
  );
}
