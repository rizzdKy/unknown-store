import React from "react";
import SlugPage from "./slugPage";

const Slug = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <SlugPage params={params} />
    </div>
  );
};

export default Slug;
