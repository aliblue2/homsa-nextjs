import { cookies } from "next/headers";

export async function SaveSession(identifier: string, value: string) {
  const cookie = await cookies();
  cookie.set(identifier, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

export async function RemoveSessions(identifier: string) {
  const cookie = await cookies();
  cookie.delete(identifier);
}

export async function GetSessions(identifier: string) {
  const cookie = await cookies();
  return cookie.get(identifier)?.value;
}
