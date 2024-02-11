import { createWishlist } from "@/app/db/models/wishlist";
import { NextResponse } from "next/server";
import { z } from "zod";

type ResponseAPIType<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const wishInputSchema = z.object({
  userId: z.any(),
  productId: z.any(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    // .safeParse adalah fungsi dari zod
    const parsedData = wishInputSchema.safeParse(data);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const user = await createWishlist(parsedData.data);

    return NextResponse.json<ResponseAPIType<unknown>>(
      {
        statusCode: 201,
        message: "Response from POST /api/wishlist !",
        data: user,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err);

      const errPath = err.issues[0].path[0];
      const errMessage = err.issues[0].message;

      return NextResponse.json<ResponseAPIType<never>>(
        // Data yang akan dikirimkan ke client
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        {
          status: 400,
        }
      );
    }

    // jika terjadi error yang diluar dugaan
    return NextResponse.json<ResponseAPIType<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error !",
      },
      {
        status: 500,
      }
    );
  }
};
