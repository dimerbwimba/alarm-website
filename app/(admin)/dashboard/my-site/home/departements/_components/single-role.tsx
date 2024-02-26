"use client"
import { deleteRole, updateRole } from "@/app/redux/slice/departement-slice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface SingleRoleProps{
    role:string,
    roleIndex:number,
    currentIndex:number,
    _id:string
}

const SingleRole = ({role, roleIndex,_id, currentIndex}:SingleRoleProps) => {
    const dispatch = useDispatch();

    const handleRoleChange = (e:any) => {
        dispatch(updateRole({ _id:_id,roleIndex:roleIndex, role: e.target.value }));
    };

    const handleDeleteRole = () => {
        dispatch(deleteRole({ _id:_id,roleIndex:roleIndex }));
    }
    return ( 
        <div className=" flex items-center my-1 space-x-2 space-y-2">
            <div className="w-32">
                Role nº {roleIndex +1}
            </div>
            <div className="w-full">
                <Input onChange={(e)=> handleRoleChange(e)} value={role} />
            </div>
            <div className="w-20">
                <Button onClick={handleDeleteRole} className=" bg-red-800 hover:bg-red-700 rounded-full px-3">
                    <X className="w-4 h-4"/>
                </Button>
            </div>
        </div>
     );
}
 
export default SingleRole;