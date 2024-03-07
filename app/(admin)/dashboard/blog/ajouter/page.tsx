import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import BlogForm from "../_components/form";

const breadcrumbItems = [
    { title: "Blog", link: "/dashboard/blog" },
    { title: "Ajouter", link: "/dashboard/blog/ajouter" }
];


const AjouterBlog = () => {
    return ( 
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Heading
                    title={`Ecrire un blog`}
                    description="Ajouter un blog."
                />
                <Separator/>
                <BlogForm/>
            </div>
        </ScrollArea>
     );
}
 
export default AjouterBlog;