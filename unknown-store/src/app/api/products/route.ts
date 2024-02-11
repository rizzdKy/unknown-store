import { getProducts } from "@/app/db/models/product";

export const GET = async () => {
  const products = await getProducts();

  return Response.json(
    {
      statusCode: 200,
      message: "Response from GET /api/products !",
      data: products,
    },

    {
      status: 200,
    }
  );
};
