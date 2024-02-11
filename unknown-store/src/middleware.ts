import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readPayloadJose } from "./lib/jwt";

export const middleware = async (request: NextRequest) => {
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("/tempimg") &&
    !request.url.includes("favicon.ico")
  ) {
    // console.log(request.method, request.url);
  }

  if (request.url.includes("/api/wishlist")) {
    // console.log("API", request.method, request.url);

    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    // cek apakah token ada atau tidak, jika gak ada kembalikan response dengan status code 401 (Unauthorized)
    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    const tokenData = await readPayloadJose<{ id: string; email: string }>(
      token.value
    );

    const requestHeaders = new Headers(request.headers);

    // Di sini kita akan menambahkan data user ke dalam headers
    requestHeaders.set("x-user-id", tokenData.id);
    requestHeaders.set("x-user-email", tokenData.email);

    // Di sini kita akan mengembalikan response dengan headers yang sudah kita tambahkan
    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  return NextResponse.next();
};
