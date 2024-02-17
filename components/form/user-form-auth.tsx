"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().refine((val) => {
    // Add your password validation logic here
    // For example, require at least 8 characters
    return val.length >= 8;
  }, {
    message: "Password must be at least 8 characters long"
  })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  // const error = searchParams.get("error")
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "",
    password:""
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    signIn("credentials", {
      email: data.email,
      password:data.password,
      callbackUrl: "/dashboard",
      // redirect: false,
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        {/* {error &&  <div className=" text-center my-1 bg-red-500 text-white rounded-md py-2">{error}</div>} */}
          <Button disabled={loading} variant={"outline"} className="ml-auto bg-red-500 w-full" type="submit">
            Continue With Email
          </Button>
        </form>
      </Form>
     
    </>
  );
}
