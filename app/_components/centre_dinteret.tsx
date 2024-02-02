import { Check, HandHelping, TrendingUp } from "lucide-react";

const CentreDinterer = () => {
    return ( 

      // <!-- Start Services -->
    <section id="services" className="lg:py-20 py-10">
        <div className="container">
            <div className="flex items-end justify-between mb-10">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Strategie</span>
                    <h2 className="text-4xl font-medium capitalize text-default-950 my-4"> Centre D&apos;interet Strategique</h2>
                </div>
            </div>
            {/* <!-- flex End--> */}

            <div className="grid lg:grid-cols-3 grid-cols-1 items-center rounded-md overflow-hidden bg-default-100 dark:bg-default-50 divide-y lg:divide-y-0 lg:divide-x divide-default-200">
                <div className="group">
                    <div className="sm:p-10 p-8">
                        <span>
                            <i data-lucide="component" className="h-14 w-14 text-default-950"></i>
                        </span>
                        <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">Réconcilier les relations</h2>
                        <a href="javascript:void(0);" className="text-default-950 text-lg font-medium">Read More
                            <i data-lucide="move-right" className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- end col --> */}

                <div className="group">
                    <div className="sm:p-10 p-8">
                        <span>
                            <i data-lucide="layers" className="h-14 w-14 text-default-950"></i>
                        </span>
                        <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">Developper les Leaders Serviteurs</h2>
                        <a href="javascript:void(0);" className="text-default-950 text-lg font-medium">Read More
                            <i data-lucide="move-right" className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- end col --> */}

                <div className="group">
                    <div className="sm:p-10 p-8">
                        <span>
                            <i data-lucide="layout-grid" className="h-14 w-14 text-default-950"></i>
                        </span>
                        <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">Tranformer les communautés</h2>
                        <a href="javascript:void(0);" className="text-default-950 text-lg font-medium">Read More
                            <i data-lucide="move-right" className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- end col --> */}
            </div>
            {/* <!-- grid End--> */}
        </div>
        {/* <!-- container End--> */}
    </section>

      //   <div className="max-w-7xl w-full  py-10 sm:py-10" id="centre_interet">
      //       <div className="mx-auto px-6 lg:px-8">
      //   <div className="mx-auto w-full  lg:px-8">
      //     <div className="mx-auto max-w-2xl lg:text-center">
      //       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      //         Centre D&apos;interet Strategique
      //       </p>
      //     </div>
      //     <div className="mx-auto mt-4 max-w-xl sm:mt-8 lg:mt-16 lg:max-w-4xl">
      //       <div className=" flex justify-center">
      //           <dl className=" md:w-1/2 space-y-5">
      //           {interest.map((feature) => (
      //               <div key={feature.name} className=" border p-1 rounded-lg bg-white/80 px-4 ">
      //                   <div className="text-base flex justify-start space-x-4 items-center font-semibold leading-7 text-gray-900">
      //                       <div className=" left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
      //                       <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
      //                       </div>
      //                       <div>{feature.name}</div>
      //                   </div>
      //               </div>
      //           ))}
      //           </dl>

      //       </div>
      //     </div>
      //   </div>
      // </div>
      //   </div>
     );
}
 
export default CentreDinterer;