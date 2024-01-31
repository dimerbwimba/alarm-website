import HeroAlarm from "./_components/hero";
import ValeurFodamental from "./_components/valeur_fondamental";
import CentreDinterer from "./_components/centre_dinteret";
import MissionVision from "./_components/visio_mision";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between pt-24">
      <HeroAlarm />
      <MissionVision />
      <CentreDinterer />
      <div className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/LNDK2G8/chidren-happy.jpg)" }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">New feature</span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.</h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente
                  ducimus.
                </p>
                <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                  href="#">start your free trial</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
