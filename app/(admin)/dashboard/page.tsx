"use client"
import React from "react";
import { useSession } from "next-auth/react";
import SkeletonLoader from "@/components/skeleton-loader";
import HomePage from "./_component/home-page";

export default function RestrictedPage() {
  // get the session
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <div className=" h-full">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-xl font-bold tracking-tight">
              <span className="py-4">We are preparing your data 👋, Loading...</span>
            </h2>
              <SkeletonLoader r={1} />
          </div>
        </div>
      </div>
    )
  }

  
    // display the page
    return (
        <HomePage data={data?.user}/>
    );
  
}
