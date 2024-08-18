import { userWithEmailSchema } from "@/modules/model/users/userSchemas"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
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
