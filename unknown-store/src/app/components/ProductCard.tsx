import React from "react";

interface Props {
  image: string;
  category: string;
  title: string;
  discountedPrice: string;
  actualPrice: string;
}

const ProductCard = ({
  image,
  category,
  title,
  discountedPrice,
  actualPrice,
}: Props) => {
  return (
    <div>
      <div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            src={`${image}`}
            alt={title}
            className="object-cover w-full lg:mx-6 lg:w-auto rounded-xl h-72 lg:h-96"
          />
        </div>
        <div className="w-[100%] md:w-[90%]">
          <div className="flex item-center justify-between">
            <p className="mt-[0.3rem] text-[14px] text-white opacity-70">
              {category}
            </p>
          </div>
          <h1 className="mt-[0.3rem] font-bold text-white opacity-85">
            {title}
          </h1>
        </div>
        <div className="mt-[0.3rem] flex-col flex items-end">
          <p className="text-[15px] line-through text-white opacity-60 ">
            {actualPrice}
          </p>
          <p className="text-[16px] text-white opacity-75">{discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
