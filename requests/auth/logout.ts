"use server";

import { RemoveSessions } from "@/utils/auth/storage";
import { redirect } from "next/navigation";

export async function LogoutUser() {
  RemoveSessions("token");
  redirect("/");
}
