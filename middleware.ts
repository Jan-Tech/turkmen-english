export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/beginner/:path*",
    "/elementary/:path*",
    "/pre-intermediate/:path*",
    "/intermediate/:path*",
    "/upper-intermediate/:path*",
    "/advanced/:path*",
    "/vocabulary/:path*",
    "/levels/:path*",
  ],
};
