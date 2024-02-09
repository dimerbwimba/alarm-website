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
      <section  className="lg:py-20 py-10 ">
          <div className="container">
              <div className="flex items-end justify-between mb-10">
                  <div className="max-w-2xl mx-auto text-center">
                      <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Apropos</span>
                      <h2 className="text-4xl font-medium capitalize text-default-950 my-4">Mission & Vision</h2>
                      <hr className="my-6 border border-dashed text-default-800 hidden xl:block"/>
                  </div>
              </div>
              {/* <!-- flex End--> */}

              <div className=" grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
                  <div className="  grid sm:grid-cols-2 gap-6 items-center">
                      <div className="space-y-6">
                          <div>
                              <img src="https://i.ibb.co/Ld3YN09/DSC6247-compressed.jpg" alt="" className="max-w-full h-full rounded-lg"/>
                          </div>
                          <div>
                              <img src="https://i.ibb.co/cknvsfg/Photo-6-group-work-compressed.jpg" alt="" className="max-w-full h-full rounded-lg"/>
                          </div>
                      </div>
                      <div>
                          <img src="https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg" alt="" className="max-w-full h-full rounded-lg"/>
                      </div>
                  </div>
                  {/* <!-- grid End--> */}

                  <div className="bg-white shadow rounded-lg p-5">
                      <h2 className="text-3xl font-medium text-default-950">African Leadership And Reconciliation Ministies Vision and Mission</h2>
                      <div className="flex items-center justify-center gap-6 mt-10">
                          <div>
                              <EyeIcon className="h-14 w-14 text-yellow-700"/>
                          </div>
                          <div>
                              <h2 className="text-xl font-bold text-default-950">Mission</h2>
                              <p className="text-base font-medium text-default-800 mt-4">
                              {" La Vision D\'ALARM c\'est L\'Afrique sans conflits tribaux et religieux violents"}
                              </p>
                          </div>
                      </div>
                      {/* <!-- flex End--> */}

                      <div className="flex items-center justify-center gap-6 my-10">
                          <div>
                              <Layers className="h-14 w-14 text-yellow-700"/>
                          </div>
                          <div>
                              <h2 className="text-xl font-bold text-default-950">Vision</h2>
                              <p className="text-base font-medium text-default-800 mt-4">
                                {
                                  "La Mission  D\'ALARM est de développer les Leaders Serviteurs au sein de l\'Eglise et la communauté Africaine ; des Leaders qui réconsilient et transforment les vies affectées par les conflicts et l\'injustice"
                                }
                              </p>
                          </div>
                      </div>
                      {/* <!-- flex End--> */}

                      {/* <a href="#" className="inline-flex items-center justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500">View All Our News
                          <i data-lucide="arrow-up-right" className="h-6 w-6"></i>
                      </a> */}
                  </div>
                  {/* <!-- col End--> */}
              </div>
              {/* <!-- grid End--> */}
          </div>
      </section>
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