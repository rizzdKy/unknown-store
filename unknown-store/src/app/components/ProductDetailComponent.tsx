import Link from "next/link";

const ProductDetailComponent = () => {
  return (
    <div className="bg-gray-900 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* images - start */}
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://gamefaqs.gamespot.com/a/box/3/2/4/82324_front.jpg"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://gamefaqs.gamespot.com/a/box/3/2/2/82322_front.jpg"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://gamefaqs.gamespot.com/a/box/3/3/1/82331_front.jpg"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
              <img
                src="https://gamefaqs.gamespot.com/a/box/3/2/1/82321_front.jpg"
                loading="lazy"
                alt="Photo by Himanshu Dewangan"
                className="h-full w-full object-cover object-center"
              />
              {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                sale
              </span> */}
              <a
                href="#"
                className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* images - end */}
          {/* content - start */}
          <div className="md:py-8">
            {/* name - start */}
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                Fancy Brand
              </span>
              <h2 className="text-2xl font-bold text-white lg:text-3xl">
                Pullover with pattern
              </h2>
            </div>
            {/* name - end */}
            {/* description - start */}
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                vero similique soluta incidunt, eius quia vitae eum, fugit quasi
                laudantium id cupiditate, totam enim mollitia? Iusto similique
                excepturi ducimus possimus?
              </p>
            </div>
            {/* description - end */}

            {/* price - start */}
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-white md:text-2xl">
                  $15.00
                </span>
                <span className="mb-0.5 text-gray-500 line-through">
                  $30.00
                </span>
              </div>
              <span className="text-sm text-gray-500">
                incl. VAT plus shipping
              </span>
            </div>
            {/* price - end */}

            {/* buttons - start */}
            <div className="flex gap-2.5">
              <a
                href="#"
                className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
              >
                Add to cart
              </a>
              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Buy now
              </a>
            </div>
            {/* buttons - end */}
          </div>
          {/* content - end */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
