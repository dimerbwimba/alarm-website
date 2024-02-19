"use client"

import BreadCrumb from "@/components/breadcrumb";
import SkeletonLoader from "@/components/skeleton-loader";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ManageUserForm } from "@/components/form/user-add-new";

const breadcrumbItems = [{ title: "Gérer les comptes", link: "/dashboard/account" },
{ title: "Modifier  ", link: "/dashboard/account" }];
interface dataProps {
    name: string
}
const UpdateUser = () => {

    const params = useParams()
    const { toast } = useToast()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [data, setData] = useState<dataProps>()
    const getUser = async () => {
        setLoading(true)
        try {

            await axios.get(`/api/user?userId=${params.userId}`).then(({ data }) => {
                if (!data.error) {
                    setLoading(false)
                    setData(data.user)
                }
            })
        } catch (error: any) {
            setError(error.message)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error.message,
            });
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    if (loading) {
        return (
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator />
                <div className=" py-1">
                    <div className=" text-black">{!error ? "Loading..." : 
                    <span className=" p-1 bg-red-600 text-white rounded">{error}</span>}</div>

                </div>
                    <SkeletonLoader r={1} />
            </div>
        )
    }
    return (
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />
            <Separator />
            <ManageUserForm initialData={data}/>
        </div>
    );
}

export default UpdateUser;