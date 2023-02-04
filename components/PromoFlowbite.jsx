import { Carousel } from 'flowbite-react';

export default function PromoFlowbite() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-3">
      <Carousel slideInterval={5000}>
        <img
          src="https://source.unsplash.com/random/1600×300/?house"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
