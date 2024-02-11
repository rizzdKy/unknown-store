"use client";
import { useEffect, useState } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchComponent } from "./SearchComponent";
import Link from "next/link";

type Product = {
  name: string;
  price: number;
  discountPrice: number;
  slug: string;
  images: string[];
  tags: string[];
};

type ResponseAPIType<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const AllProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const responseJson: ResponseAPIType<Product[]> = await res.json();
        // console.log(responseJson.data);

        setProductData(responseJson.data as Product[]);
        setIsLoading(false);
      } catch (error) {
      } finally {
        setIsLoading(true);
      }
    }
    fetchProductData();
  }, []);

  if (!isLoading) {
    return <h2>Loading...</h2>;
  }

  const fetchmore = () => {
    const fetchproduct = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const responseJson: ResponseAPIType<Product[]> = await res.json();
        // console.log(responseJson.data);

        setProductData(responseJson.data as Product[]);
      } catch (error) {}
    };
    fetchproduct();
  };

  return (
    <div className="min-h-screen min-w-screen h-[50] md:h-[100vh] bg-gray-900">
      <div className="bg-gray-900 mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4 py-8">
          <h2 className="text-2xl font-bold text-gray-200 lg:text-3xl">
            All Product
          </h2>
          <SearchComponent />
        </div>
        <InfiniteScroll
          dataLength={productData.length}
          next={fetchmore}
          hasMore={false}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product - start */}
            {productData?.map((product, idx) => (
              <div key={idx}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={product.images[0]}
                    loading="lazy"
                    alt="Photo"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    sale
                  </span>
                </Link>
                <div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {product.name}
                  </Link>
                  <div className="flex items-end gap-2">
                    <span className="font-bold text-white lg:text-lg">
                      {`$ ${product.discountPrice},00`}
                    </span>
                    <span className="mb-0.5 text-red-500 line-through">
                      {`$ ${product.price},00`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* product - end */}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AllProduct;
