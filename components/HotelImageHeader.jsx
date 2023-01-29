export default function HotelImageHeader() {
  const seeImage = () => {
    document.querySelector('#imageCard').classList.remove('hidden');
  };

  return (
    <>
      <section className="hidden mt-6 px-3 lg:grid grid-rows-3 grid-flow-col gap-2 h-[30rem] w-full">
        <div onClick={seeImage} className="row-span-3 col-span-3 rounded-xl bg-[url('https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')] bg-cover cursor-pointer" />
        <div onClick={seeImage} className="rounded-xl bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover cursor-pointer" />
        <div onClick={seeImage} className="rounded-xl bg-[url('https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')] bg-cover cursor-pointer" />
        <div onClick={seeImage} className="rounded-xl bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover cursor-pointer" />
      </section>
      <section className="relative z-20 lg:hidden">
        <div onClick={seeImage} className="h-80 lg:h-96 w-full bg-[url('https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')] bg-cover cursor-pointer" />
        <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-2 pt-5 bg-gradient-to-t from-putih to-transparent">
          <div onClick={seeImage} className="w-20 h-14 lg:w-40 lg:h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover cursor-pointer" />
          <div onClick={seeImage} className="w-20 h-14 lg:w-40 lg:h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80')] bg-cover cursor-pointer" />
          <div onClick={seeImage} className="w-20 h-14 lg:w-40 lg:h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover cursor-pointer" />
        </div>
      </section>
    </>
  );
}
