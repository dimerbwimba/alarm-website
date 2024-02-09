'use client';
import HeroAlarm from "./_components/hero";
import ValeurFodamental from "./_components/valeur_fondamental";
import CentreDinterer from "./_components/centre_dinteret";
import MissionVision from "./_components/vision_mision";
import Partenaires from "./_components/partenaires";
import HeroWithBG from "./_components/hero_bg";
import MarqSection from "./_components/marq-section";
import Departements from "./_components/departements";
import Agents from "./_components/agents";

export default function Home() {
  
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <HeroAlarm />
      <Agents/>
      <MissionVision />
      <HeroWithBG  title="Renforcer les leaders africains pour la réconciliation des communautés africaines." span_title="ALARM RDC"/>
      <MarqSection/>
      <CentreDinterer />
      <ValeurFodamental />
      <Departements/>
      <Partenaires />
    </main>
  );
}
