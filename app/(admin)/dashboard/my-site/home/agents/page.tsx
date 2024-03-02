import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AgentList from "./_components/agent-list";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page D'acceuille", link: "/dashboard/my-site/home" },
    {
        title: "Ajouter & modifier un agent", link: "/dashboard/my-site/home/agents"
    }];
const Agents = () => {
    return (
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className=" items-start justify-between">
                    <Heading
                    title={`List des agents d'ALARM`}
                    description="Ajouter et modifier ou suprimer un agent d'alarm."
                    />
                    <Separator/>
                </div>
                <AgentList />
            </div>
        </ScrollArea>
    );
}

export default Agents;