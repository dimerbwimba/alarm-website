import CarouselMain from "./carousel_main";

const HeroAlarm = () => {
    return (
        <div className=" lg:flex">
            <div className="">
                <div className="container mx-auto h-full md:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-4xl mt-8 font-bold">
                            ALARM <span className="text-yellow-700">RDC</span><span className="text-yellow-700">.</span>
                        </div>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
                        </div>
                    </nav>
                    <header className="container px-4 lg:flex items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">Empowering <span className="text-yellow-700">African Leaders</span> Reconciling <span className="text-yellow-700">African Communities</span></h1>
                            <div className="w-20 h-2 bg-yellow-700 my-4"></div>
                            <p className="text-xl mb-10">

                            </p>
                        </div>
                    </header>
                </div>
            </div>
            <CarouselMain />
        </div>
    );
}

export default HeroAlarm;