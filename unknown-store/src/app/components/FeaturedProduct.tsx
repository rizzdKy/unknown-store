import Link from "next/link";
import TopProduct from "./TopProduct";

const FeaturedProduct = () => {
  return (
    <div className="min-h-screen min-w-screen h-[50] bg-gray-900">
      <div className="pt-10 w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white ">
          Top Product
        </h1>
        <Link href={"/products"}>
          <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">
            View All Product
          </button>
        </Link>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto ">
        <TopProduct />
      </div>
    </div>
  );
};

export default FeaturedProduct;
