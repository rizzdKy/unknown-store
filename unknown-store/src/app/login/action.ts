"use server";

import { createToken } from "@/lib/jwt";
import { getUserByEmail } from "../db/models/user";
import { compareTextWithHash } from "../db/utils/hash";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";

export const doLogin = async (formData: FormData) => {
  const loginInputSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginInputSchema.safeParse({
    email,
    password,
  });

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorFinalMessage = `${errorPath} - ${errorMessage}`;

    return redirect(`http://localhost:3000/login?error=${errorFinalMessage}`);
  }

  const user = await getUserByEmail(parsedData.data.email);

  if (!user || !compareTextWithHash(parsedData.data.password, user.password)) {
    return redirect(`http://localhost:3000/login?error=Invalid%20credentials`);
  }

  const payload = {
    id: user._id,
    password: user.password,
  };

  const token = createToken(payload);

  cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60), // (1000 * 60 * 60) = 1 jam
    sameSite: "strict",
  });

  return redirect(`http://localhost:3000/`);
};
