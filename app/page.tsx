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
      <div className="px-4 mx-auto py-10 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">Nos Partenaire</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                     
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                      
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                                                  
                </a>         
            </div>
        </div> 
    
    </main>
  );
}
