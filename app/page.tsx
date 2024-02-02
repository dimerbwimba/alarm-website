'use client';
import HeroAlarm from "./_components/hero";
import ValeurFodamental from "./_components/valeur_fondamental";
import CentreDinterer from "./_components/centre_dinteret";
import MissionVision from "./_components/vision_mision";
import Partenaire from "./_components/partenaire";
import HeroWithBG from "./_components/hero_bg";
import MarqSection from "./_components/marq-section";

export default function Home() {
  
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <HeroAlarm />
      <MarqSection/>
      <MissionVision />
      <HeroWithBG />
      <CentreDinterer />
      <ValeurFodamental />
      <Partenaire />
    </main>
  );
}
