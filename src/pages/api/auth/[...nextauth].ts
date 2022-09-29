import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt({ token }) {
      return Promise.resolve(token);
    }
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: env.NEXTAUTH_SECRET,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "********" },
      },
      async authorize(credentials) {

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        });
        if (!user) {
          throw new Error('No user found');
        }
        if (user.password !== credentials?.password) {
          throw new Error('Invalid password');
        }
        
        return user;
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);