import { Check, HandHelping, TrendingUp } from "lucide-react";


const interest = [
    {
      name: 'Developper les Leaders Serviteurs',
      icon: TrendingUp,
    },
    {
      name: 'Réconcilier les relations',
      icon: HandHelping,
    },
    {
      name: 'Tranformer les communautés',
      icon: Check,
    },
  
  ]
  

const CentreDinterer = () => {
    return ( 
        <div className="bg-white max-w-7xl w-full shadow py-10 sm:py-10">
            <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto w-full  lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">ALARM RDC</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Centre D&apos;interet Strategique
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className=" flex justify-center">
                <dl className=" w-1/2 space-y-5">
                {interest.map((feature) => (
                    <div key={feature.name} className=" border p-1 rounded-lg shadow px-4 ">
                        <div className="text-base flex justify-start space-x-4 items-center font-semibold leading-7 text-gray-900">
                            <div className=" left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>{feature.name}</div>
                        </div>
                    </div>
                ))}
                </dl>

            </div>
          </div>
        </div>
      </div>
        </div>
     );
}
 
export default CentreDinterer;