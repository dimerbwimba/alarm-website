import { addHeroSection } from "@/app/redux/slice/hero-section-slice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroSectionProps } from "@/types";
import axios from "axios";
import { ArrowRightCircle } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
  const Section = ({ section }: HeroSectionProps) => {
  const {toast} = useToast()
  const [small_title, setSmallTitle] = useState(section.small_title || "");
  const [company_name, setCompanyName] = useState(section.company_name || "");
  const [slogan_title, setSloganTitle] = useState(section.slogan_title || "");
  const [button_title, setButtonTitle] = useState(section.button_title || "");

  const onSubmit = async () => {
    if (!section._id) {
      await axios
        .post("/api/manage-hero-section", {
          small_title,
          company_name,
          slogan_title,
          button_title,
        })
        .then(({ data }) => {
          toast({
            variant: "default",
            title: "vous avez modifié la section avec success",
            description: data.message,
        });
        })
        .catch((error) => {
        toast({
            variant: "destructive",
            title: "Seomething went wrong on the server",
            description: error.message,
        });
      })
      
    }else{
      await axios.put("/api/manage-hero-section", {
          _id:section._id,
          small_title,
          company_name,
          slogan_title,
          button_title,
        })
        .then(({ data }) => {
          toast({
            variant: "default",
            title: "Vos modification on était sauvegarder  avec succès",
            description: data.message,
        });
        })
        .catch((error) => {
          toast({
            variant: "default",
            title: "Somthing went wrong on the server",
            description: error.message,
        });
        });
    
    }
  };

  return (
    <div className="flex py-5">
      <div className="w-full mx-auto border xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
        <div className="p-6">
          <div className="flex-col flex items-start justify-end xl:h-full">
            <span className="text-base font-medium uppercase tracking-wider text-default-800">
              {small_title}
            </span>
            <h2 className="md:text-4xl/snug text-3xl font-semibold text-yellow-700 mt-6 uppercase">
              {company_name}
            </h2>
            <h2 className="md:text-xl/snug text-3xl font-semibold text-default-950 mt-6">
              {slogan_title}
            </h2>
            <p className="md:w-3/4 text-base text-default-800 font-medium mt-5 mb-7"></p>
            <div className="inline-flex items-center font-bold justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500">
              {button_title}
              <ArrowRightCircle className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="border-dashed border-2 p-6 mx-6 rounded-md h-full space-y-2">
          <div>
            <label className="text-black">{"L'en-tête "}</label>
            <Input value={small_title} onChange={(e) => setSmallTitle(e.target.value)} />
          </div>
          <div>
            <label className="text-black">{"Le Nom de L'entreprise"}</label>
            <Input value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div>
            <label className="text-black">{"Le Slogan de L'entreprise"}</label>
            <Input value={slogan_title} onChange={(e) => setSloganTitle(e.target.value)} />
          </div>
          <div>
            <label className="text-black">{"La designation du button"}</label>
            <Input value={button_title} onChange={(e) => setButtonTitle(e.target.value)} />
          </div>
          <Button onClick={onSubmit} className="w-full" variant={"default"}>
            { !section._id ? "Sauvegarder" : "Modifier"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section;
