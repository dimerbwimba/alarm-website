import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AgentsList from "./_components/liste-agent";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page des agents", link: "/dashboard/my-site/agents-page" }

];
const AgentsPage = () => {
    return ( 
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator />
                <AgentsList/>
            </div>
        </ScrollArea>
     );
}
 
export default AgentsPage;