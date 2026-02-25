// server/api/auth/session.post.ts

export default defineEventHandler(async (event) => {
  // 1. Read the token from the incoming request body
  const body = await readBody(event);
  const token = body?.token;

  if (token) {
    // 2. If a token is provided, save it in a secure cookie
    setCookie(event, "auth-token", token, {
      httpOnly: true, // Prevents client-side JS from reading the cookie
      secure: process.env.NODE_ENV === "production", // Requires HTTPS in production
      maxAge: 60 * 60 * 24 * 7, // Expires in 1 week (in seconds)
      path: "/", // Available across the whole site
      sameSite: "lax", // Protects against CSRF attacks
    });

    return { status: "success", message: "Session created" };
  } else {
    // 3. If no token is provided, assume it's a logout request and clear the cookie
    deleteCookie(event, "auth-token");

    return { status: "success", message: "Session destroyed" };
  }
});
