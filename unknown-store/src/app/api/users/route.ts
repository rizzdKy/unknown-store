import { createUser, getUsers } from "@/app/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

export type ResponseAPIType<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const userInputSchema = z.object({
  name: z.string().optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export const GET = async () => {
  const users = await getUsers();

  return Response.json(
    {
      statusCode: 200,
      message: "Response from GET /api/users !",
      data: users,
    },

    {
      status: 200,
    }
  );
};

//create user | Register

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    // .safeParse adalah fungsi dari zod
    const parsedData = userInputSchema.safeParse(data);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const user = await createUser(parsedData.data);

    return NextResponse.json<ResponseAPIType<unknown>>(
      {
        statusCode: 201,
        message: "Response from POST /api/users !",
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
