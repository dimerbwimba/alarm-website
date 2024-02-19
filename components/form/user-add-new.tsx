"use client";
import * as z from "zod";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { useToast } from "../ui/use-toast";
import { AlertModal } from "../modal/alert-modal";

const formSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
    company: z
        .string()
        .min(3, { message: "Product description must be at least 3 characters" }),
    email: z.string().email({ message: "Enter a valid email address" }),
    password: z.string().refine((val) => {
        // Add your password validation logic here
        // For example, require at least 8 characters
        return val.length >= 8;
    }, {
        message: "Password must be at least 8 characters long"
    })
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
    initialData: any | null;
}

export const ManageUserForm: React.FC<ProductFormProps> = ({
    initialData,

}) => {
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const title = initialData ? "Modifier un utilisateur" : "Ajouter un utilisateur";
    const description = initialData ? "Modifier un  utilisateur." : "Ajouter un utilisateur";
    const action = initialData ? "Save changes" : "Ajouter un nouveau utilisateur";

    const defaultValues = initialData
        ? initialData
        : {
            name: "",
            email: "",
            password: "",
            company: ""
        };

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const onSubmit = async (data: ProductFormValues) => {
        try {
            setLoading(true);
            if (initialData) {
                await axios.put(`/api/user/`, {
                    _id:initialData._id,
                    ...data
                }).then(({data})=>{
                    toast({
                        variant: "default",
                        title: "vous avez modifié l\'utilisateur avec success",
                        description: data.message,
                    });
                })
            } else {
               await axios.post(`/api/manage-user`, data).then(({data})=>{
                    toast({
                        variant: "default",
                        title: "Vous avez ajoutez un utilisateur avec success",
                        description: data.message,
                    });
                });
            }
            router.push(`/dashboard/account`);
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            });
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/user/?id=${initialData._id}`)
            router.refresh();
            router.push(`/dashboard/account`);
        } catch (error: any) {
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };


    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading title={title} description={description} />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <div className=" flex justify-center">
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 flex flex-col justify-center items-center md:w-1/2"
                    >
                        <div className=" w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-bold py-1 text-black">Nom de l&apos;utilisateur</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Nom de l'utilisateur"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-bold text-black">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-bold py-1 text-black">L&apos;entreprise affilier</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Entreprise"
                                                disabled={loading}
                                                {...field} />
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
                                        <FormLabel className="text-bold py-1 text-black">Mot de passe</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Mot de passe"
                                                disabled={loading}
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button disabled={loading} variant={"ghost"} className="ml-auto w-full border" type="submit">
                            {action}
                        </Button>
                    </form>
                </div>
            </Form>
        </>
    );
};
