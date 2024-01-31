import HeroAlarm from "./_components/hero";
import ValeurFodamental from "./_components/valeur_fondamental";
import CentreDinterer from "./_components/centre_dinteret";
import MissionVision from "./_components/visio_mision";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between md:p-24 py-52">
      <HeroAlarm />
      <MissionVision />
      <CentreDinterer />
      <ValeurFodamental />
    </main>
  );
}
