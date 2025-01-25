export { middleware } from "@/utils/auth/middleware";

export const config = {
  matcher: ["/profile/:path*", "/auth/:path*"],
};
