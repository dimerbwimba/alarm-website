"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { useSession , signOut } from "next-auth/react";

export default function RestrictedPage() {
  // get the session
  const {data} = useSession();

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
