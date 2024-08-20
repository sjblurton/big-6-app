import NextAuthMiddleware from "next-auth/middleware"

export default NextAuthMiddleware({
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/",
        signOut: "/",
    },
})

export const config = { matcher: ["/api/v1/workouts"] }
