import { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { userWithEmailSchema } from "@/modules/model/users/user-schemas"

const authOptions: NextAuthOptions = {
    session: { strategy: "jwt" },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === "google") {
                return userWithEmailSchema.safeParse(profile).success
            }
            return false
        },
    },
}

export default authOptions
