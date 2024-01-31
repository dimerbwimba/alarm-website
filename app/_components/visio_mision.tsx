import { Check, Globe, TrendingUp } from "lucide-react";

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
        <div className=" w-full  py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">ALARM RDC</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              African Leadership And Reconciliation Ministies Vision and Mission
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-4xl flex justify-center">
            <dl className=" md:w-2/3 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
     );
}
 
export default MissionVision;