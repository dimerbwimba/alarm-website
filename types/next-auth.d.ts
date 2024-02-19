import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    _id: string
    role: string
    provider: string
  }
  interface Session {
    user: User & {
      _id: string
      role: string
      provider: string
    }
    token: {
      _id: string
      role: string
      provider: string
    }
  }
  
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's id */
      id: string;
    } & DefaultSession["user"];
  }
}