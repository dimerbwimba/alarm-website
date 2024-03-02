import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AgentsList from "./_components/liste-agent";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page des agents", link: "/dashboard/my-site/agents-page" }

];
const AgentsPage = () => {
    return ( 
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Heading
                    title={`List de tout les agents d'ALARM`}
                    description="Modifier ou ajouter  un cv pour les agents."
                    />
                    <Separator/>
                <AgentsList/>
            </div>
        </ScrollArea>
     );
}
 
export default AgentsPage;