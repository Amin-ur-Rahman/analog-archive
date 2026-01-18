import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/items/add", "/profile/:path*"],
};
