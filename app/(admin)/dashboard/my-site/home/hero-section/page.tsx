import BreadCrumb from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import HeroSection from "./../hero-section/_components/hero_section";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" }, 
    { title: "Page D'acceuille", link: "/dashboard/my-site/home"}, 
    { title: "Hero Section", link: "/dashboard/my-site/home/hero-section" 
}];

const HomePageMySite = () => {
    return ( 
        <ScrollArea className=" h-full">

        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />
            <div className=" items-start justify-between">
                    <Heading
                    title={`Modifier la section d'acceuille ou hero section`}
                    description="Modifier ou ajouter des photo."
                    />
                    <Separator/>
                </div>
            <HeroSection/>
        </div>
        </ScrollArea>
     );
}
 
export default HomePageMySite;