import {
  HiStar, HiLocationMarker,
} from 'react-icons/hi';

export default function DetailPage() {
  return (
    <div className="continer">
      <section>
        <img src="https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" alt="" />
      </section>
      <section>
        <h2 className="mt-5 text-lg font-bold">Homestay Langit Senja</h2>
        <div className="flex my-1">
          <div className="inline-flex">
            <div className="py-1 inline-flex">
              <HiStar color="#FFC700" />
            </div>
            <p className="px-1 inline-flex">4.3</p>
          </div>
          <div className="inline-flex px-5">
            <div className="py-1 inline-flex">
              <HiLocationMarker color="#FF3C3C" />
            </div>
            <p className="px-1 inline-flex">Patak Banteng, Dieng</p>
          </div>
        </div>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh. Viverra venenatis duis massa aliquam. Elit tellus magna quam molestie. Aliquam mauris ipsum eget sit.Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh.
        </p>
      </section>
    </div>
  );
}
