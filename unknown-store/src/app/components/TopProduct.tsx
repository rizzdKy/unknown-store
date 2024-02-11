"use server";
import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  name: string;
  price: number;
  discountPrice: number;
  images: string[];
  tags: string[];
};

const fetchProduct = async () => {
  const response = await fetch("http://localhost:3000/api/products");

  const { data }: { data: Product[] } = await response.json();
  // console.log(data[0]);

  if (!response.ok) {
    throw new Error("Error ...");
  }

  return data;
};

const TopProduct = async () => {
  const products = (await fetchProduct()).slice(1, 6);

  return (
    <div className="flex justify-center">
      <div className="carousel carousel-center max-w-lg p-7 space-x-16 bg-neutral rounded-box">
        {products.map((product, idx) => (
          <div key={idx} className="carousel-item">
            <ProductCard
              title={product.name}
              actualPrice={`$ ${product.price},00`}
              discountedPrice={`$ ${product.discountPrice},00`}
              category={product.tags[0]}
              image={product.images[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProduct;
