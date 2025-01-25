import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse;
  const url = request.url;
  const token = request.cookies.get("token")?.value;

  if (url.includes("auth")) {
    if (!token) {
      return response.next();
    } else {
      const targetUrl = new URL(url);
      targetUrl.pathname = "profile";
      return response.redirect(targetUrl);
    }
  }

  if (!token) {
    const targetUrl = new URL(url);
    targetUrl.pathname = "auth";
    return response.redirect(targetUrl);
  }
};
