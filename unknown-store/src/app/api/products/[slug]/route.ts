import { ProductModel, getProductBySlug } from "@/app/db/models/product";
import { NextRequest, NextResponse } from "next/server";

type ResponseAPIType<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (
  _request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;

    const product = await getProductBySlug(slug);

    return NextResponse.json<ResponseAPIType<ProductModel>>({
      statusCode: 200,
      message: `Success GET products/${slug}`,
      data: product,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message == "NotFound") {
        return NextResponse.json<ResponseAPIType<never>>(
          {
            statusCode: 404,
            error: "Product not found",
          },
          { status: 404 }
        );
      }
    }
  }
};
