import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import { prisma } from "@/prisma";

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    
  ],
  callbacks: {
    async session({ session, user }) {
      return session
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);