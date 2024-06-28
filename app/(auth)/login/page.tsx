"use client"
import UserAuthForm from "@/components/form/user-form-auth";
import SkeletonLoader from "@/components/skeleton-loader";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SideView from "../_component/side-view";


const AdminHome = () => {
  const { data, status } = useSession()

  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <SideView/>
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
              Enter your email below to login
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