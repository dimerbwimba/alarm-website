import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import PartenaireModifier from "./_components/partenaire-modifier";
import { Heading } from "@/components/ui/heading";
const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page D'acceuille", link: "/dashboard/my-site/home" },
    {
        title: "Ajouter & modifier un partenaire", link: "/dashboard/my-site/home/agents"
    }];
const Partenaire = () => {
    return ( 
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className=" items-start justify-between">
                    <Heading
                    title={`Ajouter ou modifier un partenaire `}
                    description="Modifier ou ajouter  un partenaire."
                    />
                    <Separator/>
                </div>
                <PartenaireModifier/>
            </div>
        </ScrollArea>
     );
}
 
export default Partenaire;