"use client"
import BreadCrumb from "@/components/breadcrumb";
import { Users } from "@/components/tables/users-tables/users";
import { Separator } from "@/components/ui/separator";
import axios from "axios"
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import SkeletonLoader from "@/components/skeleton-loader";
const breadcrumbItems = [{ title: "Gérer les comptes", link: "/dashboard/account" }];

const AccountPage = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const {toast} = useToast()
    const getUser = async ()=>{
        try {
            await  axios.get('/api/manage-user').then(({data})=>{
                if (data.users.length) {
                    setUsers(data.users)
                    setLoading(false)
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

    useEffect(()=>{
        getUser()
    },[])
    if (loading) {
        return (
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                 <BreadCrumb items={breadcrumbItems} />
                 <Separator/>
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
             <Separator/>
             <Users data={users}/>
        </div>
     );
}
 
export default AccountPage;