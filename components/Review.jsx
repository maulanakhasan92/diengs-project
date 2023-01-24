import { HiStar } from 'react-icons/hi';

export default function Review() {
  const rating = 3;

  const colorRating = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      colorRating[i] = '#FFC700';
    } else {
      colorRating[i] = '#A1ADC0';
    }
  }

  return (
    <div className="py-4">
      <div className="mb-2 flex">
        <div className="w-10 h-10 mr-3 rounded-full bg-[url('https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover" />
        <div className="py-1 grow">
          <p className="text-sm font-semibold">Ahmad Rifai</p>
          <p className="text-xs text-abu2">20 Jan 2023</p>
        </div>
        {colorRating.map((element) => (
          <div>
            <HiStar color={element} size={20} />
          </div>
        ))}
        {/* <div>
          <HiStar color="#FFC700" size={20} />
        </div>
        <div>
          <HiStar color="#FFC700" size={20} />
        </div>
        <div>
          <HiStar color="#FFC700" size={20} />
        </div>
        <div>
          <HiStar color="#FFC700" size={20} />
        </div>
        <div>
          <HiStar color="#A1ADC0" size={20} />
        </div> */}
      </div>
      <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Ac quis donec ut nisi iaculis donec aliquam ullamcorper feugiat. Nulla ullamcorper libero blandit nunc in ut. </p>
      <div className="flex gap-2 mt-3">
        <div className="w-14 h-14 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
        <div className="w-14 h-14 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
      </div>
    </div>
  );
}
