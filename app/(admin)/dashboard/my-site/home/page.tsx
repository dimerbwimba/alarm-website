"use client"
import BreadCrumb from "@/components/breadcrumb";
import { Icons } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { HomePageSections, WebsitePages } from "@/constants/data";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page d'acceuille", link: "/dashboard/my-site/home" }

];

const HomePageMySite = () => {
    
    return (
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator />
                <div className=" flex justify-center items-center ">
                    <div className="w-3/4 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {HomePageSections.map((item, index) => ( 
                            <Link key={index} href={item.link}>
                                <Card key={index} className=" hover:bg-gray-100 ease-in-out transition duration-500">
                                    <CardContent className=" text-center">
                                        <div className="text-xl font-bold mt-5">{item.title}</div>
                                        <p className="text-xs text-muted-foreground flex justify-center space-x-2 ">
                                            <span>Modidier</span> <ChevronRightCircle className="h-4 w-4"/>
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </ScrollArea>
    );
}

export default HomePageMySite;