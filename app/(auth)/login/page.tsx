"use client"
import UserAuthForm from "@/components/form/user-form-auth";
import SkeletonLoader from "@/components/skeleton-loader";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";


const AdminHome = () => {
  const { data, status } = useSession()

  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Logo
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-10 lg:p-20 h-full flex items-center justify-center">
        {status === "loading" &&
          <div className="w-full flex justify-center items-center">
            <div className=" text-center space-y-2">
              <h2 className="text-xl font-bold tracking-tight">
                <span className="py-4">👋, Loading...</span>
              </h2>
              <SkeletonLoader r={1} />
            </div>
          </div>
        }
        {status === "unauthenticated" && <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login in your an account
            </h1>
            <p className="text-sm pt-4 text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className=" text-center">
            If you don&apos;t have an account , <Link href={"/register"}> <span className=" underline text-blue-700"> click here</span> </Link>
          </p>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>
            and
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </div>}
        {status === "authenticated" &&
          <div className=" flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-bold tracking-tight">
              Bonjour 👋,<br /> votre compte est toujour actif .
            </h2>
            <Link href={"/dashboard"}>
              <Button
                className="w-full mt-2"
                variant="default"
              >
                Renter sur la page administrateur
              </Button>
            </Link>
          </div>
        }
      </div>



    </div>

  );
}

export default AdminHome;