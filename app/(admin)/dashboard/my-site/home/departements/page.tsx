import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import DepartemenModifier from "./_components/departemen-modifier";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page D'acceuille", link: "/dashboard/my-site/home" },
    {
        title: "Departement", link: "/dashboard/my-site/home/departements"
    }];


const Departement = () => {
    return ( 
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator />
                <DepartemenModifier/>
            </div>
        </ScrollArea>
     );
}
 
export default Departement;