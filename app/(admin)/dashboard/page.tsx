"use client"
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession , signOut } from "next-auth/react";

export default function RestrictedPage() {
  // get the session
  const {data} = useSession();

  // redirect to signin if there is no session.
  if (!data?.user) {
    const url = new URL("/api/auth/signin", "http://localhost:3000/login");
    url.searchParams.append("callbackUrl", "/restricted");
    redirect(url.toString());
  }

  // display the page
  return (
    <div>
      <h1>Welcome to the Restricted Page, {data?.user?.email}</h1>
      <Button onClick={()=>signOut({callbackUrl:"/login"})} >
        Logout
      </Button>
    </div>
  );
}
