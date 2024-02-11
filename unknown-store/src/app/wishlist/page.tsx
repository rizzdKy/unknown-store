import React from "react";
import ServerProtectedComponents from "../components/ServerProtectedComponent";
import NavBar from "../components/NavBar";

const whislist = () => {
  return (
    <ServerProtectedComponents>
      <NavBar />
      <div className="bg-gray-900 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-200 md:mb-6 lg:text-3xl">
              Your Wishlist
            </h2>
          </div>
          <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
            {/* product - start */}
            <div className="py-5 sm:py-8">
              <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                <div className="sm:-my-2.5">
                  <a
                    href="#"
                    className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40"
                  >
                    <img
                      src="https://gamefaqs.gamespot.com/a/box/5/2/2/95522_front.jpg"
                      loading="lazy"
                      alt="Photo"
                      className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </a>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <a
                      href="#"
                      className="mb-1 inline-block text-lg font-bold text-gray-200 transition duration-100 hover:text-gray-500 lg:text-xl"
                    >
                      Persona 4
                    </a>
                    <span className="block text-gray-400">Role-Playing</span>
                  </div>
                  <div>
                    <span className="mb-1 block font-bold text-gray-200 md:text-lg">
                      $19.00
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      In stock
                    </span>
                  </div>
                </div>
                <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex h-30 w-20 overflow-hidden rounded"></div>
                    <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                      Delete
                    </button>
                  </div>
                  <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                    <span className="block font-bold text-gray-200 md:text-lg">
                      $19.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* product - end */}
          </div>
          {/* totals - start */}
          <div className="flex flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-gray-800 p-4 sm:max-w-xs">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-200">
                  <span>Subtotal</span>
                  <span>$19.00</span>
                </div>
                <div className="flex justify-between gap-4 text-gray-200">
                  <span>Shipping</span>
                  <span>$3.99</span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex items-start justify-between gap-4 text-gray-800">
                  <span className="text-lg text-gray-300 font-bold">Total</span>
                  <span className="flex flex-col items-end">
                    <span className="text-lg text-gray-200 font-bold">
                      $22.99 USD
                    </span>
                    <span className="text-sm text-gray-200">including VAT</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Check out
            </button>
          </div>
          {/* totals - end */}
        </div>
      </div>
    </ServerProtectedComponents>
  );
};

export default whislist;
