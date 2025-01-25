"use server";

import { SaveSession } from "@/utils/auth/storage";
import { redirect } from "next/navigation";

export const UserLoginHandler = async (
  prevState: string[] | undefined,
  formData: FormData
) => {
  const errors: string[] = [];
  const emailAddress = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!emailAddress) {
    errors.push("آدرس ایمیل ضرروی است");
  }

  if (!password || (password && password.trim().length === 0)) {
    errors.push("رمز عبور ضرروی است و حداقل ۸ کاراکتر است");
  }

  if (errors.length === 0) {
    const response = await fetch(`${process.env.BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: emailAddress,
        password,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      errors.push("ایمیل یا رمز عبور اشتباه است.!");
      return;
    }

    const { token } = await response.json();

    if (!token) {
      errors.push("ایمیل یا رمز عبور اشتباه است.!");
      return;
    }

    SaveSession("token", token);
    return redirect("/profile");
  }

  if (errors.length > 0) {
    return errors;
  }
};
