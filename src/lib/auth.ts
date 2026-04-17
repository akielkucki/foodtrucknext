import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth/next";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin@royalvendingcart.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // MVP hardcoded credentials - replace with database check in production
                if (
                    credentials?.email === "admin@royalvendingcart.com" &&
                    credentials?.password === "7865Shazad"
                ) {
                    return {
                        id: "1",
                        name: "Admin User",
                        email: "admin@royalvendingcart.com",
                        role: "admin"
                    }
                }
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
            }
            return token
        },
        async session({ session, token }) {
            if (session?.user) {
                (session.user as any).role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: '/admin/login',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

// Helper function to get session in server components
export const auth = () => getServerSession(authOptions);