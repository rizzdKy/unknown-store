"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const SearchComponent = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (!query) {
      router.push("/products");
    } else {
      router.push(`/products?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="h-[50%] flex-[0.4] bg-gray-200 rounded-md md:flex items-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search..."
        className="block pl-[0.5rem] w-[80%] outline-none mx-auto h-[100%] bg-gray-200"
      />
      <MagnifyingGlassIcon className="w-[1.8rem] h-[1.8rem] mr-[1rem] cursor-pointer" />
    </div>
  );
};
