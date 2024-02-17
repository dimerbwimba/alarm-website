import { NextAuthOptions } from "next-auth";
import { compare } from 'bcryptjs'
import CredentialProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "./mongodb";
import User from "@/models/user.model";
import { IUser } from "@/types";
export const authOptions: NextAuthOptions = {
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
       await connectToMongoDB()
      //  console.log(credentials);
       
       const user = await User.findOne({
            email: credentials?.email
        }).select("+password")
 
        if (user) {
          const isPasswordCorrect = !!(credentials!.password === user.password)
          
          if (!isPasswordCorrect) {
            throw new Error("Invalid password")
          }
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("Invalid credentials")
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", //sigin page
    error: "/login",
  },
};
