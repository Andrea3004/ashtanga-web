import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getPrisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/admin/login"
  },
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password ?? "";

        if (!email || !password || !process.env.DATABASE_URL) {
          return null;
        }

        const admin = await getPrisma().adminUser.findUnique({
          where: { email }
        });

        if (!admin?.isActive) {
          return null;
        }

        const passwordMatches = await bcrypt.compare(password, admin.passwordHash);

        if (!passwordMatches) {
          return null;
        }

        return {
          id: admin.id,
          email: admin.email,
          name: admin.name ?? admin.email
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = "admin";
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role === "admin" ? "admin" : undefined;
      }

      return session;
    }
  }
};
