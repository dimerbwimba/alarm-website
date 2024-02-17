import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { signInWithCredentials } from "./actions";
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [   
    CredentialProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password:{
          label: "Password", 
          type: "password"
        }
      },
      async authorize(credentials, req) {
      if (!credentials?.email || !credentials?.password) {
        return null
      }
             
      const user = await signInWithCredentials({
        email: credentials?.email,
        password: credentials?.password
      })
 
       return user;
        
      },
    }),
  ],
  pages: {
    signIn: "/login", //sigin page
    error: "/error",
  },
};
