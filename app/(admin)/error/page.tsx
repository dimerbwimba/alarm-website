"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const Error = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const errMsg = searchParams.get("error")

  return (
    <section className=" h-screen justify-center items-center flex">
      <div>
        <h1>Errors: {errMsg}</h1>
        <Button
          onClick={() => router.back()}
          className="w-full mt-2"
          variant="destructive"
        >
          Try Again
        </Button>

      </div>
      </section>
  )
}

export default Error