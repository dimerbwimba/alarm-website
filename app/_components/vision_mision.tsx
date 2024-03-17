import axios from "axios";
import { useEffect, useState } from "react";

interface MissionVisionProps{
  title:string,
  title_description:string;
  mission_title:string;
  mission_description:string;
  vision_title:string;
  vision_description:string;
  image:string;
}

const MissionVision = () => {
  const [misionvision,SetMissionvision] = useState<MissionVisionProps>()
  const [loading, setLoading] = useState(true)


  const getMissionVision = async () => {
    try {
      await axios.get("/api/public/mission-vision").then(({ data }) => {
        SetMissionvision(data.mission_vision)
        setLoading(false)
      })
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getMissionVision()
  },[])

  if (loading) {
    return (<div aria-label="Loading..." role="status" className="flex items-center h-screen space-x-2">
      <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
      </svg>
      <span className="text-4xl font-medium text-gray-500">Loading...</span>
    </div>)
  }

  return (
    <div id="mission_vision" className=" w-full bg-gray-50">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-1 sm:grid-cols-2">
            <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              {/* <div className="absolute bottom-0 right-0 bg-blue-500 w-full sm:w-4/6 overflow-hidden flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all shadow-2xl">
                <img src="https://picsum.photos/800/800" alt="" />
              </div> */}
              <div className="h-2/3 sm:h-full rounded-xl w-full overflow-hidden">
                <img src={misionvision?.image} className="h-full object-cover " alt="" />
              </div>
              <a className="-rotate-90 font-bold mt-8 mb-8 r gap-2 h-16 text-2xl leading-7" href="">
                <span>15 ans <br /> <span className=" text-lg">D&apos;expérience</span></span>
              </a>
              <a className="absolute h-20 bg-blue-500 w-20 flex items-center justify-center rounded-full bottom-10 left-10 text-white before:block before:absolute before:h-20 before:w-20 before:bg-sky-100 before:rounded-full group-hover:before:animate-ping before:-z-10 hover:bg-sky-600" href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </a>
            </div>
            <div className="pl-12">
              <h2 className="text-3xl sm:text-5xl text-black font-medium mb-6">{misionvision?.title}</h2>
              <p className="mb-6 text-lg text-black">
                {misionvision?.title_description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-1 justify-between mb-3">
                <div className=" grid grid-cols-12 hover:text-blue-300">
                  <div className=" col-span-2">
                    <img src="/mission.png" width={40} height={40}/>
                  </div>
                  <div className=" col-span-10">
                    <h2 className="font-semibold text-black text-2xl">{misionvision?.mission_title}</h2>
                    <p className="mb-6 text-lg text-gray-800">
                      {misionvision?.mission_description}
                    </p>

                  </div>
                </div>
                <div  className="  grid grid-cols-12  gap-3 hover:text-blue-300">
                  <div className="col-span-2">
                    <img src="/vision.png" width={40} height={40}/>
                  </div>

                  <div className="col-span-10">
                    <h2 className="font-semibold text-black text-2xl">{misionvision?.vision_title}</h2>
                    <h3 className="mb-6 text-lg text-gray-800">
                    {misionvision?.vision_description}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default MissionVision;
