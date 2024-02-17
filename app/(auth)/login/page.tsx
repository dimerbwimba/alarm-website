"use client"
import UserAuthForm from "@/components/form/user-form-auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, ArrowRightCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AdminHome = () => {
  const { data } = useSession()
  return (

      <div className="p-10 lg:p-20 h-full flex items-center">
        {!data?.user?.name ?
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
                If you don't have an account , <Link href={"/register"}> <span className=" underline text-blue-700"> click here</span> </Link>
              </p>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div> :
          <div className=" w-full flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="py-5">
                Bonjour <span className=" font-bold">{data?.user?.name}</span> , Your acount still active
              </h2>
              <Link href={"/dashboard"}>
                <Button>
                  <span className="px-2">Revenir au menu administrateur</span>
                  <ArrowRightCircle className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        }
      </div>
   
  );
}

export default AdminHome;