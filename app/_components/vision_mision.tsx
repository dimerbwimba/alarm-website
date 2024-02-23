import { Check, EyeIcon, Globe, Layers, TrendingUp } from "lucide-react";

const features = [
  {
    name: 'Vision',
    description:
      'La Vision D\'ALARM c\'est L\'Afrique sans conflits tribaux et religieux violents',
    icon: Globe,
  },
  {
    name: 'Mission',
    description:
      'La Mission  D\'ALARM est de développer les Leaders Serviteurs au sein de l\'Eglise et la communauté Africaine ; des Leaders qui réconsilient et transforment les vies affectées par les conflicts et l\'injustice',
    icon: Check,
  },
]

const MissionVision = () => {
  return (
    <div id="mission_vision" className=" w-full bg-gray-50">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-1 sm:grid-cols-2">
            <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              {/* <div className="absolute bottom-0 right-0 bg-blue-500 w-full sm:w-4/6 overflow-hidden flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all shadow-2xl">
                <img src="https://picsum.photos/800/800" alt="" />
              </div> */}
              <div className="h-2/3 sm:h-full rounded-xl overflow-hidden">
                <img src="https://picsum.photos/800/800" className="h-full" alt="" />
              </div>
              <a className="-rotate-90 font-bold mt-8 mb-8 r gap-2 h-16 text-2xl leading-7" href="">
                <span>15 ans <br /> <span className=" text-lg">D'expérience</span></span>
              </a>
              <a className="absolute h-20 bg-blue-500 w-20 flex items-center justify-center rounded-full bottom-10 left-10 text-white before:block before:absolute before:h-20 before:w-20 before:bg-sky-100 before:rounded-full group-hover:before:animate-ping before:-z-10 hover:bg-sky-600" href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </a>
            </div>
            <div className="pl-12">
              <h2 className="text-3xl sm:text-5xl text-black font-medium mb-6">Mission & Vision</h2>
              <p className="mb-6 text-gray-800">
                African Leadership And Reconciliation Ministies Vision and Mission
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 justify-between mb-3">
                <a href="" className="items-center gap-3 hover:text-blue-300">
                  <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="font-semibold text-black text-xl">Mission</span>
                  <p className="mb-6 text-gray-800">
                    {" La Vision D\'ALARM c\'est L\'Afrique sans conflits tribaux et religieux violents"}
                  </p>
                </a>
                <a href="" className=" items-center gap-3 hover:text-blue-300">
                  <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="font-semibold text-black text-xl">Vision</span>
                  <p className="mb-6 text-gray-800">
                    {
                      "La Mission  D\'ALARM est de développer les Leaders Serviteurs au sein de l\'Eglise et la communauté Africaine ; des Leaders qui réconsilient et transforment les vies affectées par les conflicts et l\'injustice"
                    }
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default MissionVision;

{/* // <section className="max-w-7xl w-full py-16  md:px-20 bg-green-50" id="mission_vision">
    //   <div className=" grid md:grid-cols-2 gap-4">
    //     <div className="w-full flex justify-end items-center ml-auto mr-auto">
    //       <img alt="..." className=" md:w-2/3 w-full mx-2 h-4/5 object-cover rounded-lg shadow-lg" src="https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg" />
    //     </div>
    //     <div className="w-full  ml-auto mr-auto px-4">
    //       <div className="md:pr-12">
            
    //         <h3 className="text-3xl font-semibold">African Leadership And Reconciliation Ministies Vision and Mission</h3>

    //         <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-10 lg:max-w-4xl flex justify-center">
    //           <dl className=" space-y-10">
    //             {features.map((feature) => ( */}
{/* //               <div key={feature.name} className="relative pl-16">
    //                 <dt className="text-base font-semibold leading-7 text-gray-900">
    //                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
    //                     <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
    //                   </div>
    //                   {feature.name}
    //                 </dt>
    //                 <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
    //               </div>
    //             ))}
    //           </dl>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}